import { citymodel } from "../../../../db/models/city.model.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";
export const hotels = asyncHandler(async (req, res, next) => {
  const trips = await tripmodel.find();

  return res.json({ message: "done", trips });
});

export const createHotel = asyncHandler(async (req, res, next) => {
  const { tripname, cityname, price, duration } = req.body;
  const city = await citymodel.findOne({ cityname });
  const tripcheck = await tripmodel.findOne({ tripname });
  if (tripcheck) {
    return res.json({ message: "trip exist" });
  }
  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  const trip = await tripmodel.create({
    tripname,
    city_id: city._id,
    price,
    duration,
  });

  return res.json({ message: " done", trip });
});




export const updatetrip = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { tripname, cityname, price, duration } = req.body;
  const trip = await tripmodel.findById(id);
  const city = await citymodel.findOne({ cityname })
  if (!trip) {
    return next(new Error("trip not found", { cause: 404 }));
  }
  trip.tripname = tripname
  trip.cityname = city._id
  trip.price = price
  trip.duration = duration
  await trip.save();
  return res.json({ message: "Hotel updated successfully", trip });
}
);



export const deleteHotel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedtrip = await tripmodel.findByIdAndDelete(id);
  if (!deletedtrip) {
    return next(new Error("trip not found", { cause: 404 }));
  }
  return res.json({ message: "Hotel deleted successfully", deletedtrip });
}
);
