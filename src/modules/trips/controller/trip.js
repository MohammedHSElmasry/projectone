import { citymodel } from "../../../../db/models/city.model.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";
export const trips = asyncHandler(async (req, res, next) => {
  const trips = await tripmodel.find();

  return res.json({ message: "done", trips });
});

export const createtrip = asyncHandler(async (req, res, next) => {
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
  const city = await citymodel.findOne({ cityname })
  if (!city) {
    return next(new Error("City not found", { cause: 404 }));
  }
  const trip = await tripmodel.findById(id);

  if (!trip) {
    return next(new Error("trip not found", { cause: 404 }));
  }
  trip.tripname = tripname
  trip.cityname = city._id
  trip.price = price
  trip.duration = duration
  await trip.save();
  return res.json({ message: "trip updated successfully", trip });
}
);



export const deletedtrip = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedtrip = await tripmodel.findByIdAndDelete(id);
  if (!deletedtrip) {
    return next(new Error("trip not found", { cause: 404 }));
  }
  return res.json({ message: "trip deleted successfully", deletedtrip });
}
);
