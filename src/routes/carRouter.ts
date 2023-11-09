import express, { Router } from "express";
const router: Router = express.Router();
import * as carController from "./../controllers/carsControllers";

router.get("/", carController.get);
router.get("/:id", carController.getById);
router.post("/add", carController.post);
router.put("/:id", carController.put);
router.delete("/:id", carController.remove);

export default router;
