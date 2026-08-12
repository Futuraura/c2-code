export default defineEventHandler((e) => {
  console.log(
    `Ping from ${e.context.clientAddress ? e.context.clientAddress : "unknown"}`,
  );

  return {
    message: "pong",
    success: true,
  };
});
