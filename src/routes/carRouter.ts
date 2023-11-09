import express, { Router } from "express";
const router: Router = express.Router();
import * as carController from "./../controllers/carsControllers";

router.get("/", carController.get);
router.get("/:id", carController.getById);
router.post("/create", carController.post);

export default router;
