// PaymentSchema.js
import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema({
  appointment: {
    type: mongoose.Types.ObjectId,
    ref: 'Appointment',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Payment', paymentSchema);