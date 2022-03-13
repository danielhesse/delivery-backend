import express from "express";

const server = express();

server.get("/", (_, response) => {
  return response.json({
    status: 200,
    message: "Delivery Backend is running!"
  });
});

server.use((_, response) => {
  return response.status(404).json({
    status: 404,
    message: "Route not found!"
  });
});

server.listen(3333, () => {
  console.log("🚀 Server running on port 3333!");
});
