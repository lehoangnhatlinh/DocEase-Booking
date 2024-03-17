import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import adminRouter from "./routes/v1/admin.router.js";
import authRoute from "./routes/v1/auth.router.js";
import doctorRoute from "./routes/v1/doctor.router.js";
import reviewRoute from "./routes/v1/review.router.js";
import userRoute from "./routes/v1/user.router.js";
import bookingRoute from "./routes/v1/booking.router.js";
import { requireLogin } from "./middleware/auth.middleware.js";

//rest object
const app = express();

const corsOption = {
  origin: true,
};

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));

// router
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", requireLogin, doctorRoute);
app.use("/api/v1/reviews", requireLogin, reviewRoute);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/bookings", requireLogin, bookingRoute);


app.get("/", (req, res) => {
  res.send("Api is working");
});

export default app;
