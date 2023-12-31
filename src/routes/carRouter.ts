import express, { Router } from "express";
const router: Router = express.Router();
import upload from "../middleware/upload";
import * as carController from "./../controllers/carsControllers";

router.get("/", carController.get);
router.get("/:id", carController.getById);
router.post("/add", upload.single("picture"), carController.post); // add middleware upload.single("picture")
router.put("/:id", upload.single("picture"), carController.put);
router.delete("/:id", carController.remove);

export default router;
