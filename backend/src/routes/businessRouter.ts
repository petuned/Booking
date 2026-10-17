import { Router, type Request, type Response } from "express";
import { getBusinesses } from "../database/queries.ts";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const businesses = await getBusinesses();
    console.log("Tietokantavastaus kun haettii kaikki yritykset: ", businesses);
    res.send(businesses);
  } catch (e) {
    console.log("Something went wrong: ", e);
  }
});

export default router;
