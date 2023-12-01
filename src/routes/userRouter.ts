import express, { Router } from "express";
const router: Router = express.Router();
import upload from "../middleware/upload";
import authenthicateJWT from "../middleware/authenthicateJWT";
import * as usersController from "../controllers/usersControllers";

router.post("/register", upload.single("picture"), usersController.register);
router.post("/login", upload.single("picture"), usersController.login);
router.post("/loginsuperadmin", upload.single("picture"), usersController.loginAdmin);
router.get("/profile", authenthicateJWT, usersController.getCurrentUser);

export default router;
