import { Router } from "express";
import * as tripcontrooler from './controller/trip.js'
import { fileUpload,fileValidation } from "../../utils/multer.js";
const router = Router()

router.get('/',tripcontrooler.trips)
router.post('/create', fileUpload(fileValidation.image).single('trip'), tripcontrooler.createtrip)
router.put('/update/:id',tripcontrooler.updatetrip)
router.delete('/delete/:id',tripcontrooler.deletedtrip)
export default router
