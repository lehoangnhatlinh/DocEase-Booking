import User from '../models/User.model.js'; 
import Doctor from '../models/Doctor.model.js';
import bcrypt from "bcryptjs"; 
import jwt from 'jsonwebtoken'; 

const generateToken = user => {
    return jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {
        expiresIn: '15d'
    })
}

export const register = async (req, res) => {
    
    const {email, password, name, photo, gender, role} = req.body; 

    try {
        const userRole = role || "patient"
        const existingUser = await User.findOne({email}); 
        const existingDoctor = await Doctor.findOne({email}); 

        //check if user exist
        if(existingUser || existingDoctor) {
            return res.status(400).json({message: "User already exist"}); 
        }

        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Nếu người dùng chưa tồn tại, tạo mới và đặt giá trị mặc định cho role là "patient"
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            photo,
            gender,
            role: userRole
        });

        await newUser.save(); 
        return res.status(200).json({ message: "User successfully created", user: newUser});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error"});
    }
};

export const login = async (req, res) => {
    const { email } = req.body;

    try {
        let user = null;

        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }

        if (doctor) {
            user = doctor;
        }

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Invalid email or password' });
        }

        // Get token
        const token = generateToken(user);

        const { password, role, appointments, ...rest } = user._doc;
        return res.status(200).json({ status: true, message: "Login successfully", token, data: { ...rest } });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};
