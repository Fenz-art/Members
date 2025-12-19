import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("USC KIIT Members API is running 🚀");
});

// Minimal health check route – no middleware, no external deps
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});