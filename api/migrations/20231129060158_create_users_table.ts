import { Knex } from "knex";

const TABLE_NAME = "users";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.string("email", 255).notNullable();
    table.string("password", 255).notNullable();
    table.string("role", 255).notNullable().defaultTo("member");
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
