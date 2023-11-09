interface CarList {
  id: number;
  type: string;
  name: string;
  brand: string;
  year: number;
  rent_price: number;
  img_path: string;
}

const cars: CarList[] = [
  {
    id: 1,
    type: "small",
    name: "Car1",
    brand: "Toyota",
    year: 2022,
    rent_price: 50,
    img_path: "path/to/image1.jpg",
  },
  {
    id: 2,
    type: "medium",
    name: "Car2",
    brand: "Honda",
    year: 2021,
    rent_price: 60,
    img_path: "path/to/image2.jpg",
  },
  {
    id: 3,
    type: "large",
    name: "Car3",
    brand: "Hyundai",
    year: 2020,
    rent_price: 70,
    img_path: "path/to/image3.jpg",
  },
];

export default cars;
