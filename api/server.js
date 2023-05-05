import express from "express/index.js";
import mongoose from "mongoose";

const app = express();

const connect = async () => {
  mongoose
    .connect("mongodb://localhost/fiverapp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log("MongoDB connection error: " + err));
};

app.listen(8800, () => {
  connect();
  console.log("Server running on port 5000");
});
