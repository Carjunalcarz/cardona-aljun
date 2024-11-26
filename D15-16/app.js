const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const cors = require("cors");
require("dotenv").config();

// Express app
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// Enable CORS (allows requests from any origin)
app.use(cors());  // You can also specify options for restricted origins
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded



// // Routes
app.use("/todos", todoRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectToDatabase();
});
