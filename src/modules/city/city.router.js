import * as citycontroller from "./controller/city.js";
import { validition } from "../../middleware/validation.js";
import {fileUpload,fileValidation} from '../../utils/multer.js'
import * as validators from "./valdition.js";
import { Router } from "express";
const router = Router();
router.post(
  "/create",fileUpload(fileValidation.image).single('city'),
  validition(validators.create),
  citycontroller.createcity
);
router.get("/", citycontroller.getcity);
router.delete("/delete/:id", citycontroller.deletecity);
router.patch("/update/:id", citycontroller.updatecity);
export default router;
