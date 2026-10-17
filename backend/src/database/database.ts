import { Pool } from "pg";
import { Kysely, PostgresDialect } from "kysely";
import type { Database } from "./types_db.ts";

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});*/
export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL
    })
  })
});
