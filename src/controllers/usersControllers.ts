import { Request, Response } from "express";
import bcrypt from "bcrypt";
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

export { register };
