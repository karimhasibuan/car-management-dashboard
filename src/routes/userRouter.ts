import express, { Router } from "express";
const router: Router = express.Router();
import upload from "../middleware/upload";
import * as usersController from "../controllers/usersControllers";

router.post("/register", upload.single("picture"), usersController.register);

export default router;
