import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return res.status(403).send("You are not authorized");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("User deleted successfully");
};

export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
