import { Knex } from "knex";
import bcrypt from "bcrypt";

const TABLE_NAME = "users";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex(TABLE_NAME).del();

  // Hash password
  const hashedpassword = await bcrypt.hash("superadmin19", 10);

  // Inserts seed entries
  await knex(TABLE_NAME).insert([{ name: "KH Hasibuan", email: "khadmin@gmail.com", password: hashedpassword, role: "superadmin" }]);
}
