import { citymodel } from "../../../../db/models/city.model.js";
import { hotelmodel } from "../../../../db/models/hotel.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";
import cloudinary from "../../../utils/cloudinary.js";
export const hotels = asyncHandler(async (req, res, next) => {
  const hotels = await hotelmodel.find();

  return res.json({ message: "done", hotels });
});

export const createHotel = asyncHandler(async (req, res, next) => {
  const { name, cityname, singleRoomprice, doubleRoomprice } = req.body;
  const city = await citymodel.findOne({ cityname });
  const hotelcheck = await hotelmodel.findOne({ name });
  if (hotelcheck) {
    return res.json({ message: "name exist" });
  }
  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  if (!req.file) { return next(new Error("image is required ", { cause: 400 })) }
  const { secure_url, public_id } = await cloudinary.uploader.upload(
    req.file.path,
    {
      folder: `project/hotel`
    }
  )

  const hotel = await hotelmodel.create({
    name,
    city_id: city._id,
    singleRoomprice,
    doubleRoomprice,
    image: { secure_url, public_id }
  });

  return res.json({ message: " done", hotel });
});




export const updateHotel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { name, cityname, singleRoomprice, doubleRoomprice } = req.body;
  const hotel = await hotelmodel.findById(id);
  const city = await citymodel.findOne({ cityname })
  if (!city) {
    return next(new Error("City not found", { cause: 404 }));
  }
  if (!hotel) {
    return next(new Error("Hotel not found", { cause: 404 }));
  }
  hotel.name = name
  hotel.cityname = city._id
  hotel.singleRoomprice = singleRoomprice
  hotel.doubleRoomprice = doubleRoomprice
  await hotel.save();
  return res.json({ message: "Hotel updated successfully", hotel });
}
);



export const deleteHotel = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedHotel = await hotelmodel.findByIdAndDelete(id);
  if (!deletedHotel) {
    return next(new Error("Hotel not found", { cause: 404 }));
  }
  return res.json({ message: "Hotel deleted successfully", deletedHotel });
}
);
