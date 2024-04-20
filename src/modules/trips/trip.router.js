import { Router } from "express";
import * as tripcontrooler from './controller/trip.js'
const router = Router()

router.get('/',tripcontrooler.hotels)
router.post('/create',tripcontrooler.createHotel)
router.put('/update/:id',tripcontrooler.updatetrip)
router.delete('/delete/:id',tripcontrooler.deleteHotel)
export default router
