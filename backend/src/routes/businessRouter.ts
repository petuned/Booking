import { Router, type Request, type Response } from "express";
import {
  getBusinessesByType,
  getBusinessInfo,
  getBusinessTypes,
  getServicesByBusiness
} from "../database/queries.ts";

const router = Router();

router.get("/types", async (_req: Request, res: Response) => {
  try {
    const businessTypes = await getBusinessTypes();
    res.send(businessTypes);
  } catch (e) {
    console.log("Something went wrong: ", e);
  }
});

router.get("/types/:type", async (req: Request, res: Response) => {
  try {
    // Siivoo myös tutkimine järkevämmäks + kunno virheviesti
    const type = req.params.type;
    if (type && typeof type == "string") {
      const businesses = await getBusinessesByType(type);
      res.send(businesses);
    }
  } catch (e) {
    console.log("Something went wrong: ", e);
  }
});

router.get("/:businessid", async (req: Request, res: Response) => {
  try {
    // Siivoo myös tutkimine järkevämmäks + kunno virheviesti
    const business_id = req.params.businessid;
    if (business_id && typeof business_id == "string") {
      const info = await getBusinessInfo(business_id);
      res.send(info);
    }
  } catch (e) {
    console.log("Something went wrong: ", e);
  }
});

router.get("/:businessid/services", async (req: Request, res: Response) => {
  try {
    // Siivoo myös tutkimine järkevämmäks + kunno virheviesti
    const business_id = req.params.businessid;
    if (business_id && typeof business_id == "string") {
      const services = await getServicesByBusiness(business_id);
      res.send(services);
    }
  } catch (e) {
    console.log("Something went wrong: ", e);
  }
});

export default router;
