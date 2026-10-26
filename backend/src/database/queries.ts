import { db } from "./database.ts";

export async function getBusinessTypes() {
  const businessTypes = await db
    .selectFrom("businesses")
    .select("type")
    .distinct()
    .execute();
  return businessTypes;
}

export async function getBusinessesByType(type: string) {
  const businesses = await db
    .selectFrom("businesses")
    .selectAll()
    .where("type", "=", type)
    .execute();
  return businesses;
}

export async function getBusinessInfo(business_id: string) {
  const info = await db
    .selectFrom("businesses")
    .select(["name", "description"])
    .where("business_id", "=", business_id)
    .executeTakeFirst();
  return info;
}

export async function getServicesByBusiness(business_id: string) {
  const services = await db
    .selectFrom("services")
    .selectAll()
    .where("business_id", "=", business_id)
    .execute();
  return services;
}
