// Important modules import
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// middleware import
const { AuthMiddleware } = require("./middleware");

// mongo db connection import
const connectDB = require("./db/connect.js");

// routes import
const { DalleRoutes, UserRoutes, PostRoutes } = require("./routes");

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(AuthMiddleware);
// Routes connection
app.use("/api/v1/post", PostRoutes);
app.use("/api/v1/dalle", DalleRoutes);
app.use("/api/v1/auth", UserRoutes);

// Global error handling
app.use("*", async (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

// server and mongodb connection
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    app.listen(8000, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

// server start
startServer();
