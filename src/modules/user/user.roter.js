import { Router } from "express";
import * as usercontroller from "./controller/user.js";
import { auth } from "../../middleware/autntication.js";
const router = Router();
router.get("/profile", auth, usercontroller.getuser);
router.get("/users", usercontroller.users);
export default router;
