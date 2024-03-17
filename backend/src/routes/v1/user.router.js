import express from "express";
import { authenticate, restrict } from "../../auth/verifyToken.js";
//import { createDoctor } from "../../controllers/doctor.controller.js";
import {
  deleteUser,
  getAllUser,
  getMyAppointments,
  getUserById,
  getUserProfile,
  updateUser,
} from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get(
  "/:id",
  authenticate,
  restrict(["admin", "doctor", "patient"]),
  getUserById
);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
//router.post("/create", authenticate, restrict(["admin"]), createDoctor);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["patient"]),
  getMyAppointments
);

export default router;
