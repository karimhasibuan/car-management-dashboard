import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("cars").del();

  // Inserts seed entries
  await knex("cars").insert([
    { id: 1, type: "small", name: "Car1", brand: "Toyota", year: 2022, rent_price: 50, img_path: "path/to/image1.jpg" },
    { id: 2, type: "medium", name: "Car2", brand: "Honda", year: 2021, rent_price: 60, img_path: "path/to/image2.jpg" },
    { id: 3, type: "large", name: "Car3", brand: "Hyundai", year: 2020, rent_price: 70, img_path: "path/to/image3.jpg" },
  ]);
}
