import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  booking: {
    type: mongoose.Types.ObjectId,
    ref: 'Booking',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Cancelled'],
    default: 'Pending',
  },
}, {
  timestamps: true,
});

export default mongoose.model('Appointment', appointmentSchema)