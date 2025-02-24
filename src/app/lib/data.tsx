import { sql } from '@vercel/postgres'

export async function getStock() {
  try {
    const data = sql`SELECT stock FROM watermelons`

    if ((await data).rows.length === 0) {
      return 0
    }

    return (await data).rows[0].stock
  } catch (error) {
    console.error('Error fetching stock:', error)
    return 0
  }
}
