const express = require("express");
const path = require("path"); // <-- Make sure this is here
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
const authApiRoutes = require("./routes/authRoutes");
const todoApiRoutes = require("./routes/todoRoutes");
const viewRoutes = require("./routes/viewRoutes"); // <-- CRITICAL: Make sure this line exists

const app = express();

// --- View Engine Setup ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// --- Middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

// --- Mount Routers ---
// API Routes
app.use("/api/auth", authApiRoutes);
app.use("/api/todos", todoApiRoutes);

// View Routes (This is the one that handles /login, /register, etc.)
app.use("/", viewRoutes); // <-- CRITICAL: Make sure this line exists
console.log("http://localhost:3000");

module.exports = app;
