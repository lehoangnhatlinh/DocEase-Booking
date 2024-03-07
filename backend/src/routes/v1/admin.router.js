import express from "express";
import { authenticate, restrict } from "../../auth/verifyToken.js";
import { createDoctorByAdmin } from "../../controllers/admin.controller.js";
import { getAllUser } from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.post("/create", authenticate, restrict(["admin"]), createDoctorByAdmin);

export default router;
