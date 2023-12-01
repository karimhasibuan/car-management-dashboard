import { Model, ModelObject } from "objection";

export class CarsData extends Model {
  id!: number;
  type!: string;
  name!: string;
  brand!: string;
  year!: number;
  rent_price!: number;
  img_path!: string;
  created_by!: number | null;
  updated_by!: number | null;
  deleted_by!: number | null;

  static get tableName() {
    return "cars";
  }
}

export type CarsDataModel = ModelObject<CarsData>;
