import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/v1/auth.router.js";
import userRoute from "./routes/v1/user.router.js";
import doctorRoute from "./routes/v1/doctor.router.js";
import bookingRoute from "./routes/v1/booking.router.js";

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
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/bookings", bookingRoute);

app.get("/", (req, res) => {
  res.send("Api is working");
});

export default app;
