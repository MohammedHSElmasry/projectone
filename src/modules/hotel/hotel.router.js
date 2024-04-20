import { Router } from "express";
import * as hotelcontroller from './controller/hotel.js'
const router = Router()

router.get('/',hotelcontroller.hotels)
router.post('/create',hotelcontroller.createHotel)
router.put('/update/:id',hotelcontroller.updateHotel)
router.delete('/delete/:id',hotelcontroller.deleteHotel)
export default router
