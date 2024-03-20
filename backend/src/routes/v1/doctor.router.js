import express from 'express'; 
<<<<<<< Updated upstream
import {getAllDoctor, getDoctorById, updateDoctor, deleteDoctor} from '../../controllers/doctor.controller.js';
=======
import {getAllDoctor, getDoctorById, updateDoctor, deleteDoctor, getDoctorProfile} from '../../controllers/doctor.controller.js';
import {getAllReviews,createReview} from '../../controllers/review.controller.js'
>>>>>>> Stashed changes
import { authenticate ,restrict } from '../../auth/verifyToken.js';

const router = express.Router(); 

router.get('/', authenticate, restrict(['admin', 'doctor', 'patient']), getAllDoctor);
router.get('/:id', authenticate, restrict(['admin', 'doctor', 'patient']), getDoctorById); 
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor); 
router.delete('/:id',authenticate, restrict(['doctor']), deleteDoctor); 

<<<<<<< Updated upstream
export default router;
=======
router.get("/profile/me", authenticate, restrict(["doctor"]), getDoctorProfile);
router.get("/:doctorId/reviews", getAllReviews);
router.post("/:doctorId/reviews", createReview);
export default router;
>>>>>>> Stashed changes
