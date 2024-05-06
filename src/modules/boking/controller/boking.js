import { asyncHandler } from "../../../utils/errorhandling.js";
import { bokingmodel } from "../../../../db/models/boking.js";
import { userModel } from "../../../../db/models/user.model.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { hotelmodel } from "../../../../db/models/hotel.model.js";
import { programmodel } from "../../../../db/models/program.js";
export const addBooking = asyncHandler(async (req, res, next) => {
  const { userid, id } = req.params;
  const user = await userModel.findById(userid);
  let tripBooked = null;
  let hotelBooked = null;
  let programBooked = null;

  if (!user) {
    return next(new Error("Invalid userid"));
  }

  const trip = await tripmodel.findById(id);
  const hotel = await hotelmodel.findById(id);
  const program = await programmodel.findById(id);

  if (trip) {
    tripBooked = trip.tripname;
  } else if (hotel) {
    hotelBooked = hotel.name;
  } else if (program) {
    programBooked = program.program_name;
  }

  const booking = await bokingmodel.create({
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    email: user.email,
    userid,
    userApplied: {
      trip: tripBooked,
      hotel: hotelBooked,
      program: programBooked,
    },
  });

  return res.json({ message: "Done", booking });
});

export const getbooking = asyncHandler(async (req, res, next) => {
  const book = await bokingmodel.find();
  return res.json({ message: "done", book });
});

export const deleteBooking = asyncHandler(async (req, res, next) => {
  const { bokid } = req.params;

  // التحقق من صحة البيانات المرسلة
  if (!bokid) {
    return res.status(400).json({ message: "Missing booking ID" });
  }

  // البحث عن الحجز وحذفه
  const book = await bokingmodel.findOneAndDelete({ _id: bokid });

  if (!book) {
    return res.status(404).json({ message: "Booking not found" });
  }

  return res.json({ message: "Booking deleted successfully", book });
});
