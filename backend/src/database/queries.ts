import { db } from "./database.ts";

export async function getBusinesses() {
  const businesses = await db
    .selectFrom("businesses")
    .select(["name", "type", "description"])
    .execute();
  return businesses;
}
