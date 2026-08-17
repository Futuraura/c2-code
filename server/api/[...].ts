import { Hono } from "hono";
import { auth } from "../lib/auth";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.get("/ping", async (c) => {
  return c.json({ message: "pong" }, 200);
});

app.use(
  "*",
  cors({
    origin: "http://localhost:4321",
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

/* DO NOT REMOVE, THIS LINE FORWARDS ALL TRAFFIC INTO HONO */
export default defineEventHandler((event) => {
  return app.fetch(toWebRequest(event));
});
