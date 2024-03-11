import bcrypt from "bcryptjs";
import Doctor from "../models/Doctor.model.js";

export const createDoctorByAdmin = async (req, res) => {
  const { email, password, name, gender, role } = req.body;

  try {
    if (req.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized to create doctor" });
    }

    const userRole = role || "doctor";
    const existingDoctor = await Doctor.findOne({ email });

    //check if user exist
    if (existingDoctor) {
      return res.status(400).json({ message: "User already exist" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newDoctor = await Doctor.create({
      email,
      password: hashedPassword,
      name,
      gender,
      role: userRole,
    });
    res
      .status(200)
      .json({ success: true, message: "Created doctor", data: newDoctor });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create doctor" });
  }
};
