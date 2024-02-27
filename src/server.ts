import Fastify from "fastify";
import { knex } from "./database";
const fastify = Fastify({ logger: true });

fastify.get("/", async (request, reply) => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

fastify.listen({ port: 3000 }, () => console.log("Servidor rodando!!!"));
