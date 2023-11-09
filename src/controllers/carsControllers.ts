import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import carListData from "./../models/dummyData";
const cloudinary = require("cloudinary").v2;

cloudinary.config({
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

const get = (req: Request, res: Response) => {
  const { brand = "" } = req.query || {};
  const filteredCars = carListData.filter((car: CarList) => car.brand.toLowerCase() === (brand as string).toLowerCase());

  res.status(200).render("home", {
    cars: brand ? filteredCars : carListData,
  });
};

const post = (req: Request, res: Response) => {
  const reqBody = req.body;
  const newId = uuidv4();
  const newObjCarWithId: CarList = {
    ...reqBody,
    id: newId,
  };

  if (req.file) {
    const filebase64: string = req.file.buffer.toString("base64");
    const file: string = `data:${req.file.mimetype};base64,${filebase64}`;

    cloudinary.uploader.upload(file, (err: any, result: any) => {
      if (err) {
        return res.status(400).json({ message: err.message });
      }

      newObjCarWithId.img_path = result.url;

      const newCarList = [...carListData, newObjCarWithId];
      res.status(201).json(newCarList);
    });
  } else {
    const newCarList = [...carListData, newObjCarWithId];
    res.status(201).json(newCarList);
  }
};

const put = (req: Request, res: Response) => {
  const carId = req.params.id;
  const updatedCar: CarList = req.body;
  const index = carListData.findIndex((car: CarList) => car.id === Number(carId));
  if (index !== -1) {
    carListData[index] = {
      ...updatedCar,
      id: Number(carId),
    };
    return res.status(200).json(carListData[index]);
  } else {
    return res.status(404).json({ message: "Car not found" });
  }
};

const remove = (req: Request, res: Response) => {
  const carId = req.params.id;
  const index = carListData.findIndex((car: CarList) => car.id === Number(carId));
  if (index !== -1) {
    carListData.splice(index, 1);
    return res.status(200).json({ message: "Car successfully deleted", cars: carListData });
  } else {
    return res.status(404).json({ message: "Car not found" });
  }
};

const getById = (req: Request, res: Response) => {
  const getId = req.params.id;
  const filterById = carListData.filter(({ id }: any) => id === Number(getId));

  res.status(200).json(filterById);
};

export { get, post, put, getById, remove };
