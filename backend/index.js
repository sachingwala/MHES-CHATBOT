const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const progressRoutes = require("./routes/progressRoutes");

require("dotenv").config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// const chatbotRoutes = require("./routes/chatbotRoutes");
// app.use("/api/chatbot", chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Import Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/chatbot", require("./src/routes/chatbotRoutes"));
app.use("/api/therapy", require("./src/routes/therapyRoutes"));
app.use("/api/journal", require("./src/routes/journalRoutes"));
app.use("/api/progress", require("./src/routes/progressRoutes"));
app.use("/api/admin", require("./src/routes/adminRoutes"));

app.get("/", (req, res) => res.send("🚀 Mental Health Chatbot API Running!"));
app.listen(process.env.PORT || 5000, () => console.log(`🚀 Server running on port ${process.env.PORT || 5000}`));
