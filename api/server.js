import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost/fiverapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: " + err));

app.listen(8800, () => console.log("Server running on port 5000"));
