# Lost Update Demo

Welcome to the **Lost Update Demo**! This project demonstrates the **lost update concurrency issue** in a Next.js application. Follow the steps below to set up and run the demo.

## Prerequisites

### 1. Install Dependencies

Ensure you have all necessary dependencies installed. Run the following command in the project root:

```bash
pnpm install
# or
yarn install
# or
npm install
# or
bun install
```

### 2. Connect to a Database

This demo requires a PostgreSQL database. Follow these steps to set up a database:

1. Visit [Vercel](https://vercel.com/) and create a project.
2. Navigate to the **Storage** option (Vercel Database Marketplace) and choose a PostgreSQL provider. This project is configured to work with **Neon**, but you can select another provider if preferred.
3. Retrieve your database connection string and add it to an `.env` file in the project root:

```env
# Recommended for most uses
DATABASE_URL=postgres://user:password@your-database-host.com:5432/database-name

# For uses requiring a connection without pgbouncer
DATABASE_URL_UNPOOLED=postgres://user:password@your-database-host.com:5432/database-name

# Parameters for constructing your own connection string
PGHOST=your-database-host.com
PGHOST_UNPOOLED=your-database-host.com
PGUSER=user
PGDATABASE=database-name
PGPASSWORD=password

# Parameters for Vercel Postgres Templates
POSTGRES_URL=postgres://user:password@your-database-host.com:5432/database-name
POSTGRES_URL_NON_POOLING=postgres://user:password@your-database-host.com:5432/database-name
POSTGRES_USER=user
POSTGRES_HOST=your-database-host.com
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=database-name
POSTGRES_URL_NO_SSL=postgres://user:password@your-database-host.com:5432/database-name?sslmode=disable
POSTGRES_PRISMA_URL=postgres://user:password@your-database-host.com:5432/database-name?connection_limit=1
```

## Running the Project

Once the dependencies are installed and the database is set up, start the development server:

```bash
pnpm run dev
# or
yarn dev
# or
npm dev
# or
bun dev
```

This will start the Next.js app locally. Open [http://localhost:3000](http://localhost:3000) in your browser to access the demo.

## Seeding the Database

To create the necessary tables and seed the database with initial data, follow these steps:

1. Open the `route.ts` file and **remove** the following line:
   ```ts
   return Response.json({ message: "Remove this code line" });
   ```
2. Save the file.
3. In your browser, navigate to:
   ```
   http://localhost:3000/seed
   ```
   This will trigger the seed function, creating the necessary database tables and inserting initial data.
4. After seeding is complete, you should see a message confirming that the database was successfully seeded.

## Navigating the Demo

The demo consists of three sections, accessible via buttons at the top left:

- **Issue** (Default Page): Demonstrates the lost update issue. Press the **spacebar** to trigger the animation.
- **Explanation**: Provides an overview of the issue with visual slices. Navigate forward and backward using the **arrow keys**.
- **Fix**: Shows the corrected implementation. Press the **spacebar** to run the animation.

Explore these sections to understand the concurrency issue and its resolution. Enjoy learning about the lost update problem in Next.js! 🚀

