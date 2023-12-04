import { Model, ModelObject } from "objection";

export class UsersData extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: string;

  static get tableName() {
    return "users";
  }
}

export type UsersDataModel = ModelObject<UsersData>;
