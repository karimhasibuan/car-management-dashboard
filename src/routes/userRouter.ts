import express, { Router } from "express";
const router: Router = express.Router();
import * as usersController from "../controllers/usersControllers";

router.post("/register", usersController.register);

export default router;
