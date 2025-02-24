'use server'

import { sql } from '@vercel/postgres'
import { debug } from 'console'
import { revalidatePath } from 'next/cache'

export async function checkoutIncorrect(amount: number) {
  if (amount <= 0) {
    return { error: 'Invalid amount' }
  }

  try {
    // ❌ Problem: No row-level locking, multiple users can read the same stock value!
    const res = await sql`SELECT stock FROM watermelons`
    const stock = res.rows[0]?.stock ?? 0

    debug('Issue', stock)

    // ❌ Problem: The check does not guarantee stock availability due to race conditions
    if (stock < amount) {
      return { error: 'Not enough stock' }
    }

    // Simulate delay to mimic real-world execution time gap
    setTimeout(() => {
      // ❌ Problem: Race condition – multiple users may overwrite stock concurrently
      sql`UPDATE watermelons SET stock = ${stock - amount}`
    }, 150) // Artificial delay

    revalidatePath('/issue') // 🔹 Refresh the UI, but the data might already be incorrect
    return {
      success: true,
      priorStock: stock,
      amount: amount,
      remainingStock: stock - amount, // ❌ This might be inaccurate due to concurrent updates!
    }
  } catch (error) {
    revalidatePath('/issue')
    return { error: `Transaction failed, ${error}` }
  }
}

export async function checkout(amount: number) {
  if (amount <= 0) {
    return { error: 'Invalid amount' }
  }

  const client = await sql.connect() // 🔹 Get a database client for transactions

  try {
    await client.query('BEGIN') // 🔹 Start transaction to ensure atomicity

    // ✅ Improvement: Lock the row to prevent lost updates
    const res = await client.query(
      'SELECT stock FROM watermelons LIMIT 1 FOR UPDATE'
    )
    const stock = res.rows[0]?.stock ?? 0

    // ✅ Improvement: Ensure stock is available before proceeding
    if (stock < amount) {
      await client.query('ROLLBACK') // 🔹 Rollback to maintain data integrity
      return { error: 'Not enough stock' }
    }

    // ✅ Improvement: Safely update stock within the transaction
    await client.query('UPDATE watermelons SET stock = stock - $1', [amount])

    await client.query('COMMIT') // 🔹 Commit the transaction once the update is successful

    revalidatePath('/fix') // 🔹 Refresh the UI with correct stock data
    return {
      success: true,
      priorStock: stock,
      amount: amount,
      remainingStock: stock - amount,
    }
  } catch (error) {
    await client.query('ROLLBACK') // 🔹 Rollback on failure to prevent inconsistent data
    return { error: `Transaction failed, ${error}` }
  } finally {
    client.release() // 🔹 Ensure the connection is released back to the pool
  }
}

export async function reset(path: string) {
  await sql`UPDATE watermelons SET stock = 5`
  revalidatePath(`/${path}`)
}