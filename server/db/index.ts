import "dotenv/config";
import { drizzle } from "drizzle-orm/bun-sql";

if (process.env.DATABASE_URL === undefined) {
  throw new Error("Database URL is not defined.");
}

export const db = drizzle(process.env.DATABASE_URL);
