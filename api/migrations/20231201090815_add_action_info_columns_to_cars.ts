import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("cars", (table) => {
    table.string("created_by").nullable();
    table.string("updated_by").nullable();
    table.string("deleted_by").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable("cars", (table) => {
    table.dropColumn("created_by");
    table.dropColumn("updated_by");
    table.dropColumn("deleted_by");
  });
}
