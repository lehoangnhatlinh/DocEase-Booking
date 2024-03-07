import Doctor from "../models/Doctor.model.js";

export const createDoctorByAdmin = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (req.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, message: "Unauthorized to create doctor" });
    }

    const newDoctor = await Doctor.create({ email, password, name });
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
