import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema ({
    doctor: {
        type: mongoose.Types.ObjectId, 
        ref: 'Doctor'
    }, 
    user: {
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    }, 
    reviewText: {
        type: String, 
        require: true
    }, 
    rating: {
        type: Number, 
        require: true, 
        min: 0, 
        max: 5, 
        default: 0
    }
},{
    timestamps: true
})

export default mongoose.model('Review', reviewSchema); 