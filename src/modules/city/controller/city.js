import { asyncHandler } from "../../../utils/errorhandling.js";
import { citymodel } from "../../../../db/models/city.model.js";
export const createcity = asyncHandler(async (req, res, next) => {
  const { cityname } = req.body;
  const citycheck = await citymodel.findOne({ cityname });
  if (citycheck) {
    return next(new Error("city exist", { cause: 201 }));
  }
  const city = await citymodel.create({
    cityname: cityname,
  });
  return res.json({ message: "done", city });
});

export const updatecity = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { cityname } = req.body;
  const citycheck = await citymodel.findOne({ cityname });
  if (citycheck) {
    return next(new Error("city exist", { cause: 201 }));
  }
  const city = await citymodel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      cityname: cityname,
    },
    {
      new: true,
    }
  );
  return res.json({ message: "done", city });
});


export const deletecity = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedCity = await citymodel.findByIdAndDelete(id);

  if (!deletedCity) {
// 
    return res.status(404).json({ message: "City not found" });
  }

  return res.json({ message: "City deleted successfully", deletedCity });
});


export const getcity = asyncHandler(async (req, res, next) => {
  const citys = await citymodel.find();

  return res.json({ message: "done", citys });
});
