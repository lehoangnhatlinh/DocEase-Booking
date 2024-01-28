import express from 'express'; 
import {getAllDoctor, getDoctorById, updateDoctor, deleteDoctor} from '../../controllers/doctor.controller.js';
import { authenticate ,restrict } from '../../auth/verifyToken.js';

const router = express.Router(); 

router.get('/', authenticate, restrict(['admin']), getAllDoctor);
router.get('/:id', authenticate, restrict(['doctor']), getDoctorById); 
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor); 
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor); 

export default router;