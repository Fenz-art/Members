import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import membersRoutes from "./routes/members.routes.js";

const app = express();

/* ---------- CORS ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://usc-kiit-members.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// Preflight is handled by the global CORS middleware in Express 5

/* ---------- BODY ---------- */
app.use(express.json());

/* ---------- DB ---------- */
connectDB();

/* ---------- ROUTES ---------- */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/members", membersRoutes);

/* ---------- ROOT ---------- */
app.get("/", (req, res) => {
  res.send("USC KIIT Members API is running 🚀");
});

/* ---------- ERROR ---------- */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Server error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
