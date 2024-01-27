import mongoose, { Schema } from 'mongoose'; 

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },

  name: {
    type: String,
    require: true,
  },

  phone: { type: Number },
  photo: { type: String },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },

  role: {
    type: String,
    enum: ["patient", "admin", "doctor"],
    default: "patient",
  },

  bloodType: { type: String },
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
}); 

export default mongoose.model('User', UserSchema); 