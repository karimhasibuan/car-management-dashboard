import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import carListData from "./../models/dummyData";
import { CarsData } from "../models/carsData";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: "dqvubnigp",
  api_key: "735277177926233",
  api_secret: "XDMpdQ5Tuz0KRCRWWj0q6Jn3mRs",
  secure: true,
});

interface CarList {
  id: number;
  type: string;
  name: string;
  brand: string;
  year: number;
  rent_price: number;
  img_path: string;
}

const get = async (req: Request, res: Response) => {
  try {
    const { brand = "" } = req.query || {};
    const cars = brand ? await CarsData.query().where("brand", "like", `%${brand}%`) : await CarsData.query();
    res.status(200).json({ cars });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const post = async (req: Request, res: Response) => {
  try {
    const reqBody: any = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.v2.uploader.upload(file, async (err: any, result: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const newObjCarWithId: CarList = {
        ...reqBody,
        img_path: result.url,
      };

      const newCar = await CarsData.query().insert(newObjCarWithId);
      res.status(201).json(newCar);
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const put = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const reqBody: any = req.body;

    if (!req.file) {
      const updatedCar = await CarsData.query().patchAndFetchById(id, reqBody);
      return res.status(200).json(updatedCar);
    }

    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.v2.uploader.upload(file, async (err: any, result: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      const newObjCarWithId: CarList = {
        ...reqBody,
        img_path: result.url,
      };

      const updatedCar = await CarsData.query().patchAndFetchById(id, newObjCarWithId);
      res.status(200).json(updatedCar);
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const remove = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;
    const deletedCar = await CarsData.query().deleteById(carId);
    if (deletedCar) {
      const cars = await CarsData.query();
      return res.status(200).json({ message: "Car successfully deleted", cars });
    } else {
      return res.status(404).json({ message: "Car not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const carId = req.params.id;

    const car = await CarsData.query().findById(carId);

    if (car) {
      return res.status(200).json(car);
    } else {
      return res.status(404).json({ message: "Car not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { get, post, put, getById, remove };
