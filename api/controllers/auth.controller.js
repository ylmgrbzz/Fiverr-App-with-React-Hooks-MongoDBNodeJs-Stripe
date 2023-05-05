import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ ...req.body, password: hash });

    const user = await newUser.save();
    res.status(201).send("User created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await user.findOne({ username: req.body.username });
    if (!user) return res.status(404).send("User not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) return res.status(400).send("Wrong password");

    const token = jwt.sign(
      { _id: user._id, isSeller: user.isSeller },
      process.env.JWT_SECRET
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accesToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
