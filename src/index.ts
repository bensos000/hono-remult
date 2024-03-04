import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { remultHono } from "remult/remult-hono";
import { Task } from "../models/task";

const app = new Hono();

const api = remultHono({
  entities: [Task],
});

app.route("/", api);

serve({
  fetch: app.fetch,
  port: 3000,
});
