import { Router } from "express";
import * as programcontrooler from './controller/program.js'
const router = Router()
router.get('/',programcontrooler.programs)
router.post('/create',programcontrooler.createprogram)
router.put('/update/:programId',programcontrooler.updateProgram)
router.delete('/delete/:id',programcontrooler.deleteprogram)
export default router
