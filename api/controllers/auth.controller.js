import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {}
};
