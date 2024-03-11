import express from "express";
import { authenticate, restrict } from "../../auth/verifyToken.js";
import {
  deleteDoctor,
  getAllDoctor,
  getDoctorById,
  updateDoctor,
} from "../../controllers/doctor.controller.js";

import reviewRouter from "./review.router.js";
const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);
router.get("/", getAllDoctor);
router.get("/:id", getDoctorById);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);

export default router;
