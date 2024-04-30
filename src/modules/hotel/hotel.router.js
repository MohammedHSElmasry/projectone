import { Router } from "express";
import * as hotelcontroller from './controller/hotel.js'
import { fileUpload,fileValidation } from "../../utils/multer.js";
const router = Router()

router.get('/', hotelcontroller.hotels)
router.get('/:cityid', hotelcontroller.hotelbecity)
router.post('/create', fileUpload(fileValidation.image).single('hotel'), hotelcontroller.createHotel)
router.put('/update/:id', hotelcontroller.updateHotel)
router.delete('/delete/:id', hotelcontroller.deleteHotel)
export default router
