import Review from '../models/Review.model'; 

export const getAllReview = async (req, res, next) => {
    try {
        const review = Review.find({})
        res.status(200).json({success: true, message: 'Review Found', data: review});
        return review;
    } catch (error) {
        res.status(404).json({success: false, message: 'Not Found'});
    }
}; 

export const createReview = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
}