import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema ({
    doctor: {
        type: mongoose.Types.ObjectId, 
        ref: 'Doctor', 
        require: true
    }, 
    user: {
        type: mongoose.Types.ObjectId, 
        ref: 'User', 
        require: true
    }, 
    ticketPrice: {
        type: Stirng, 
        require: true
    }, 
    appointment: {
        type: Date, 
        require: true
    }, 
    status: {
        type: String, 
        enum: ['Pending', 'Approve', 'Cancel'], 
        default: 'Pending'
    }, 
    isPaid: {
        type: Boolean, 
        default: true
    }
}, {
    timestamps: true
})

export default mongoose.model('Booking', bookingSchema);