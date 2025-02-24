import { db } from "@vercel/postgres";

const client = await db.connect();

async function seedStock() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE watermelons (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      stock INT NOT NULL
    );
  `;

  return await client.sql`
    INSERT INTO watermelons (id, stock) VALUES (uuid_generate_v4(), 5);
  `;
}

export async function GET() {
  return Response.json({ message: "Remove this code line" });
  try {
    await client.sql`BEGIN`;
    await seedStock();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
