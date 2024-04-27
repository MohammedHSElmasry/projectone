import { citymodel } from "../../../../db/models/city.model.js";
import { hotelmodel } from "../../../../db/models/hotel.model.js";
import { programmodel } from "../../../../db/models/program.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";
export const hotels = asyncHandler(async (req, res, next) => {
  const hotels = await hotelmodel.find();

  return res.json({ message: "done", hotels });
});

export const createprogram = asyncHandler(async (req, res, next) => {
  const { program_name, city_name, hotel_name, trips } = req.body;
  const city = await citymodel.findOne({ cityname:city_name });
  const hotel = await hotelmodel.findOne({name:hotel_name})
  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  if (!hotel) {
    return res.status(404).json({ message: "hotel not found" });
  }
  
  const program = await programmodel.create({
    program_name: program_name,
    city_name: city.cityname,
    hotel_name: hotel_name,
    trips: trips,
  });
  
  return res.json({ message: "done", program });
  
});




// export const updateprogram = asyncHandler(async (req, res, next) => {
//   const { id } = req.params;
//   const { program_name, city_name, hotel_name, trips } = req.body;
//   const city = await citymodel.findOne({ cityname:city_name });
//   const hotel = await hotelmodel.findOne({name:hotel_name})
//   const program = await programmodel.findById(id)
//   if (!city) {
//     return res.status(404).json({ message: "City not found" });
//   }

//   if (!hotel) {
//     return res.status(404).json({ message: "hotel not found" });
//   }
//   program.program_name = program_name
//   program.city_name = city_name``
//   program.hotel_name = hotel_name
//   program.trips = trips
//   await program.save();
//   return res.json({ message: "Hotel updated successfully", program });
// }
// );



export const deleteprogram= asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedprogram = await programmodel.findByIdAndDelete(id);
  if (!deletedprogram) {
    return next(new Error("program not found", { cause: 404 }));
  }
  return res.json({ message: "program deleted successfully", deletedprogram });
}
);



export const programs = asyncHandler(async(req,res,next)=>{
  const programs = await programmodel.find()

  return res.json({message:'done', programs})
})
 



