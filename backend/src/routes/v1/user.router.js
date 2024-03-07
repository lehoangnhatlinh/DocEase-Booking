import express from "express";
import { authenticate, restrict } from "../../auth/verifyToken.js";
import { createDoctor } from "../../controllers/doctor.controller.js";
import {
  deleteUser,
  getAllUser,
  getUserById,
  updateUser,
} from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/:id", authenticate, restrict(["patient", "Admin"]), getUserById);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.post("/create", authenticate, restrict(["admin"]), createDoctor);

export default router;
