import { Request, Response, NextFunction } from "express";
import { UsersData } from "../models/usersData";

const authorize = (role: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = (req.user as any).userId;
      const user = await UsersData.query().findById(userId);
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (!role.includes(user.role)) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      next();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
};

export default authorize;
