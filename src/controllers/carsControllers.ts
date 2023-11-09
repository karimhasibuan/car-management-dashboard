import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import carListData from "./../models/dummyData";

const get = (req: Request, res: Response) => {
  const { brand = "" } = req.query || {};
  const filteredCars = carListData.filter(({ brand }: any) => brand.toLowerCase() === (brand as string).toLowerCase());

  res.status(200).render("home", {
    cars: brand ? filteredCars : carListData,
  });
};

const post = (req: Request, res: Response) => {
  const reqBody = req.body;
  const newId = uuidv4();
  const newObjCarWithId = {
    ...reqBody,
    id: newId,
  };

  console.log({ reqBody });

  const newCarList = [...carListData, newObjCarWithId];
  res.status(201).json(newCarList);
};

const getById = (req: Request, res: Response) => {
  const getId = req.params.id;
  const filterById = carListData.filter(({ id }: any) => id === Number(getId));

  res.status(200).json(filterById);
};

export { get, getById, post };
