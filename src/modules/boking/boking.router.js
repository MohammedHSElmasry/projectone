import * as bokingcontroller from './controller/boking.js'
import { Router } from "express";
const router = Router()
router.get('/',bokingcontroller.getbooking)
router.post('/:userid/:id',bokingcontroller.addBooking)
router.delete('/:bokid',bokingcontroller.deleteBooking)
export default router