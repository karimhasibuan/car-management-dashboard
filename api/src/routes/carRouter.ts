import express, { Router } from "express";
const router: Router = express.Router();
import upload from "../middleware/upload";
import authorize from "../middleware/authorize";
import authenthicateJWT from "../middleware/authenthicateJWT";
import * as carController from "./../controllers/carsControllers";

router.get("/", carController.get);
router.get("/:id", carController.getById);
router.post("/add", authenthicateJWT, authorize(["superadmin", "admin"]), upload.single("picture"), carController.post); // add middleware upload.single("picture")
router.put("/:id", authenthicateJWT, authorize(["superadmin", "admin"]), upload.single("picture"), carController.put);
router.put("/delete/:id", authenthicateJWT, authorize(["superadmin", "admin"]), carController.remove); // this route for soft delete

export default router;
