import { Response } from "express";

const get = async (req: any, res: Response) => {
  try {
    res.status(200).json({ message: "Welcome to the Car Management API" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { get };
