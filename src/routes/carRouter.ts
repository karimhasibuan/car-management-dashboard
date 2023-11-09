import express, { Router } from "express";
const router: Router = express.Router();
import upload from "../middleware/upload";
import * as carController from "./../controllers/carsControllers";

router.get("/", carController.get);
router.get("/:id", carController.getById);
router.post("/add", upload.single("picture"), carController.post);
router.put("/:id", carController.put);
router.delete("/:id", carController.remove);

export default router;
