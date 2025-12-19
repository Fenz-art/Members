import express from "express";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import membersRoutes from "./routes/members.routes.js";
import uploadsRoutes from "./routes/uploads.routes.js";

const app = express();

// Debug: verify routes file import is loaded
console.log("🚀 Members routes file loaded");

/* ---------- CORS ---------- */
app.use(
  cors({
    origin: [
      "https://usc-kiit-members.vercel.app",
      "http://localhost:5173"
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true
  })
);

// VERY IMPORTANT: Enable preflight for all routes
app.options("/*", cors());

/* ---------- BODY ---------- */
app.use(express.json());

/* ---------- DB ---------- */
connectDB();

/* ---------- ROUTES ---------- */
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.use("/api/members", membersRoutes);
console.log("✅ /api/members route mounted");

app.use("/api/uploads", uploadsRoutes);

/* ---------- ROOT ---------- */
app.get("/", (req, res) => {
  res.send("USC KIIT Members API is running 🚀");
});

/* ---------- ERROR ---------- */
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Server error" });
});

// Remove fallback, Railway requires strict PORT usage
const PORT = process.env.PORT;
console.log("Listening on PORT:", PORT);
app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
