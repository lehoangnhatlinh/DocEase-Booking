import bcrypt from "bcryptjs";
import Doctor from "../models/Doctor.model.js";
import Booking from "../models/Booking.model.js"

export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query; 
        let doctors; 

        if(query) {
            doctors = await Doctor.find({
                isApproved: 'approved', 
                $or: [
                    { name: { $regex: query, $option: 'i' } }, 
                    { specialization: { $regex: query, $option: 'i' } },
                ], 
            }).select('-password'); 
        } else {
            doctors = await Doctor.find({ isApproved: 'approved' }).select('-password'); 
        }
        res.status(200).json({success: true, message: 'Doctors Found', data: doctors});
        return doctors;
    } catch (error) {
        res.status(404).json({success: false, message: 'Not Found'});
    }
}

export const getDoctorById = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await Doctor.findById(id).select('-password'); 
        res.status(200).json({success: true, message: 'Doctor Found', data: doctor});
        return doctor;
    } catch (error) {
        res.status(404).json({success: false, message: 'Not Doctor Found'});
    }
}

// export const createDoctor = async (req, res) => {
//     const payload ={
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       gender,
//       specialization,
//       qualifications,
//       experiences,
//       bio,
//       about,
//     }

//     try {
//         const newDoctor = await Doctor.create(payload);
//         res.status(200).json({success: true, message: 'Created doctor', data: newDoctor});
//         return doctor;
//     } catch (error) {
//         res.status(500).json({success: false, message: 'Doctor already exist'});
//     }
// }

export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updateDoctor = await Doctor.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).json({success: true, message: 'Successfully updated', data: updateDoctor});
        return updateDoctor;
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to update'});
    }
}



export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const deleteDoctor = await Doctor.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Successfully deleted', data: deleteDoctor});
        return deleteDoctor;
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to delete'});
    }
}

export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;
    try {
      console.log(doctorId)
      const doctor = await Doctor.findById(doctorId);
      console.log(doctor)
      if (!doctor) {
        return res
          .status(404)
          .json({ success: false, message: "Doctor not found" });
      }
      const { password, ...rest } = doctor._doc;
      // const appointments = await Booking.find({doctor:doctorId});
      res
        .status(200)
        .json({
          success: true,
          message: "Profile info is getting",
          data: { ...rest },
        });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, message: "Something went wrong, cannot get" });
    }
  };
