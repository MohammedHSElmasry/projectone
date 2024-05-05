import { asyncHandler } from "../../../utils/errorhandling.js";
import { bokingmodel } from "../../../../db/models/boking.js";
import { userModel } from "../../../../db/models/user.model.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { hotelmodel } from "../../../../db/models/hotel.model.js";
import { programmodel } from "../../../../db/models/program.js";
export const addBooking = asyncHandler(async (req, res, next) => {
  const { userid, id } = req.params;
  const user = await userModel.findById(userid);
  const trip = await tripmodel.findById(id);
  const hotel = await hotelmodel.findById(id);
  const program = await programmodel.findById(id);
  if (!user) {
    return next(new Error("Invalid userid"));
  }

  let tripBooked = false;
  let hotelBooked = false;
  let programBooked = false;
  if (trip) {
    tripBooked = true; // إذا كان هناك رحلة، ثم تفعيل الحجز إلى true
  } else if (hotel) {
    hotelBooked = true;
  } else programBooked = true;

  const booking = await bokingmodel.create({
    fname: user.fname,
    lname: user.lname,
    username: user.username,
    gmail: user.email,
    userid,
    userApplied: {
      trip: tripBooked,
      hotel:hotelBooked,
      program:programBooked
    },
  });

  return res.json({ message: "Done", booking });
});



export const getbooking = asyncHandler(async(req,res,next)=>{
    const book = await bokingmodel.find()
    return res.json({message:'done',book})
})