import User from '../models/UserSchema.js'; 

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
