import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import secretKey from "./secretKeyToken";

interface TokenPayload {
  id: number;
  email: string;
  password: string;
  userId: number;
}

const authenthicateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, secretKey) as TokenPayload;
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export default authenthicateJWT;
