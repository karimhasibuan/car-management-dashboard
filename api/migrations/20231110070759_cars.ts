import { Knex } from "knex";

const TABLE_NAME = "cars";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable(TABLE_NAME, (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.string("type", 255).notNullable();
    table.string("name", 255).notNullable();
    table.string("brand", 255).notNullable();
    table.integer("year", 4).notNullable();
    table.integer("rent_price", 11).notNullable();
    table.string("img_path", 255).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable(TABLE_NAME);
}
