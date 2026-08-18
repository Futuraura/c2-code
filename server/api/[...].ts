import { Hono } from "hono";
import { cors } from "hono/cors";
import { auth } from "../lib/auth";

const app = new Hono().basePath("/api");

app.get("/ping", async (c) => {
  return c.json({ message: "pong" }, 200);
});

app.use(
  "*",
  cors({
    origin: "*",
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/auth/*", (c) => auth.handler(c.req.raw));

/* DO NOT REMOVE, THIS LINE FORWARDS ALL TRAFFIC INTO HONO */
export default defineEventHandler((event) => {
  return app.fetch(toWebRequest(event));
});
