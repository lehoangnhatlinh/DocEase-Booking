<<<<<<< Updated upstream
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
=======
import Doctor from "../models/Doctor.model.js";
import Review from "./../models/Review.model.js";
//get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    console.log("reviews: ", 123)
    res
      .status(200)
      .json({ success: true, message: "Successful", data: reviews });
  } catch (err) {
    res.status(404).json({ success: flase, message: "not found" });
  }
};

//create review
export const createReview = async (req, res) => {
  if (!req.body.doctor) req.body.doctor = req.params.doctorId;
  if (!req.body.user) req.body.user = req.userId;

  const newReview = new Review(req.body);

  try {
    const savedReview = await newReview.save();

    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: {
        reviews: savedReview._id,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Reviews submitted", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// export const createReview = async (req, res) => {
//   if (!req.body.doctor) req.body.doctor = req.params.doctorId;
//   // Lấy userId từ session
//   const userId = req.session.userId;

//   const newReview = new Review({
//     ...req.body,
//     user: userId // Sử dụng userId từ session
//   });

//   try {
//     const savedReview = await newReview.save();

//     await Doctor.findByIdAndUpdate(req.body.doctor, {
//       $push: {
//         reviews: savedReview._id,
//       },
//     });

//     res
//       .status(200)
//       .json({ success: true, message: "Review submitted", data: savedReview });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };
>>>>>>> Stashed changes
