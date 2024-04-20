import { Router } from "express";
import * as tripcontrooler from './controller/trip.js'
const router = Router()

router.get('/',tripcontrooler.trips)
router.post('/create',tripcontrooler.createtrip)
router.put('/update/:id',tripcontrooler.updatetrip)
router.delete('/delete/:id',tripcontrooler.deletedtrip)
export default router
