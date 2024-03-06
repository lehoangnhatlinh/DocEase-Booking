import express from "express"; 
import {getAllUser, getUserById, updateUser, deleteUser} from '../../controllers/user.controller.js'; 
import {authenticate, restrict} from '../../auth/verifyToken.js';

const router = express.Router();

router.get('/', authenticate, restrict(['admin', 'doctor', 'patient']),  getAllUser); 
router.get('/:id', authenticate, restrict(['admin', 'doctor', 'patient']), getUserById); 
router.put('/:id', authenticate, restrict(['patient']), updateUser); 
router.delete('/:id', authenticate, restrict(['patient']), deleteUser); 

export default router;