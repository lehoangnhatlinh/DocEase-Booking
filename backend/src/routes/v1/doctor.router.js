
import express from 'express'; 
import {getAllDoctor, getDoctorById, updateDoctor, deleteDoctor, getDoctorProfile} from '../../controllers/doctor.controller.js';
import { authenticate ,restrict } from '../../auth/verifyToken.js';

const router = express.Router(); 

router.get('/', authenticate, restrict(['admin', 'doctor', 'patient']), getAllDoctor);
router.get('/:id', authenticate, restrict(['admin', 'doctor', 'patient']), getDoctorById); 
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor); 
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor); 

router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);

export default router;
