import express, { Router } from "express";
const router: Router = express.Router();
import * as landingPageControllers from "./../controllers/landingPageControllers";

router.get("/", landingPageControllers.get);

export default router;
