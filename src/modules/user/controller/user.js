import { userModel } from "../../../../db/models/user.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";
export const getuser = asyncHandler(async (req, res, next) => {
 const id = req.user._id
 const user = await userModel.findById(id)
  return res.json({ message: "done", user: user});
});


export const users = asyncHandler(async (req, res, next) => {
  const users = await userModel.find()
   return res.json({ message: "done", user: users});
 });