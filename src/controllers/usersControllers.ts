import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import secretKey from "../middleware/secretKeyToken";
import { UsersData } from "../models/usersData";

interface UserRegistration {
  id: number;
  name: string;
  email: string;
  password: string;
}

const register = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  try {
    if (!reqBody.email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existingUser = await UsersData.query().findOne({ email: reqBody.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(reqBody.password, salt);

    const newObjUserWithId: UserRegistration = {
      ...reqBody,
      password: hashedPassword,
    };

    const newUser = await UsersData.query().insert(newObjUserWithId);

    res.status(201).json({ message: "Registration Successful", user: newUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  const reqBody: any = req.body;
  try {
    const user = await UsersData.query().findOne({ email: reqBody.email });
    if (!user) {
      return res.status(400).json({ message: "Email not registered" });
    }

    const validPassword = await bcrypt.compare(reqBody.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, secretKey);

    res.status(200).json({ message: "Login Successful", token });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const userId = (req.user as any)?.userId;
    const currentUser = await UsersData.query().findById(userId);

    if (!currentUser) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ user: currentUser });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { register, login, getCurrentUser };
