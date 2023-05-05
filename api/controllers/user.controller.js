import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("You are not authenticated");

  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) return res.status(403).send("You are not authorized");
    if (payload.id !== user._id) {
      return res.status(403).send("You are not authorized");
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User deleted successfully");
  });
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
