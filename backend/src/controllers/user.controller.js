import User from '../models/User.model.js'; 

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password"); // => No select password field  
        res.status(200).json({success: true, message: 'Users Found', data: users}); 
        return users;
    } catch (error) {
        res.status(404).json({success: false, message: 'Not Found'}); 
    }
}; 

export const getUserById = async (req, res) => {
    const id = req.params.id; 

    try {
        const user = await User.findById(id).select("-password"); 
        res.status(200).json({success: true, message: 'User Found', data: user})
        return user;
    } catch (error) {
        res.status(404).json({success: false, message: 'No User Found'}); 
    }
}

export const updateUser = async (req, res) => {
    const id = req.params.id; 

    try {
        const updateUser = await User.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(200).json({success: true, message: 'Successfully updated', data: updateUser});
        return updateUser;
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to update'});
    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id; 
    try {
        const deleteUser = await User.findOneAndDelete(id);
        res.status(200).json({success: true, message: 'Successfully deleted', data: deleteUser});
        return deleteUser;
    } catch (error) {
        res.status(500).json({success: false, message: 'Failed to delete'});
    }
}

export const changeUserRoleToDoctor = async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params._id, { role: "doctor" }).exec();
      if (user) {
        // Tạo một bản ghi mới trong bảng Doctor từ thông tin của người dùng
        const doctor = new Doctor({
          _id: user._id,
          email: user.email,
          password: user.password,
          name: user.name,
          phone: user.phone,
          photo: user.photo,
          gender: user.gender,
          role: user.role,
          bloodType: user.bloodType,
          appointments: user.appointments,
          // Thêm các trường khác cho bác sĩ nếu cần thiết
        });
        await doctor.save();
        return doctor;
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error changing user role to doctor:", error);
      throw error;
    }
  }
