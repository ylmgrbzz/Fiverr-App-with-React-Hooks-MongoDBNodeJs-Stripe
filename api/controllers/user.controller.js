import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  const token = req.cookies.accesToken;
  if (!token) return res.status(401).send("You are not authenticated");

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).send("You are not authorized");
    if (payload.id !== user._id)
      return res.status(403).send("You are not authorized");
  });
};

export default deleteUser;
