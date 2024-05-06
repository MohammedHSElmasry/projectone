import { citymodel } from "../../../../db/models/city.model.js";
import { hotelmodel } from "../../../../db/models/hotel.model.js";
import { programmodel } from "../../../../db/models/program.js";
import { tripmodel } from "../../../../db/models/trip.model.js";
import { asyncHandler } from "../../../utils/errorhandling.js";


export const createProgram = asyncHandler(async (req, res, next) => {
  const { program_name, city_name, hotel_name, trips } = req.body;

  if (!program_name || !city_name || !hotel_name || !trips) {
    return res.status(400).json({ message: "Missing required fields" });
  }


    const city = await citymodel.findOne({ cityname: city_name }); // تم تصحيح اسم الحقل
    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    const hotel = await hotelmodel.findOne({ name: hotel_name });
    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    const program = await programmodel.create({
      program_name: program_name, // تم تصحيح اسم الحقل
      city_name: city_name, // تم تصحيح اسم الحقل
      hotel_name: hotel_name, // تم تصحيح اسم الحقل
      hotelimage: {
        secure_url: hotel.image.secure_url,
        public_id: hotel.image.public_id
      },
      trips,
    });

    return res.json({ message: "Program created successfully", program });

});










export const updateProgram = asyncHandler(async (req, res, next) => {
  const { programId } = req.params; // معرف البرنامج الذي نريد تحديثه
  const { program_name, city_name, hotel_name, trips } = req.body;

  if (!program_name || !city_name || !hotel_name || !trips) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // التحقق من وجود البرنامج المراد تحديثه
  const program = await programmodel.findById(programId);
  if (!program) {
    return res.status(404).json({ message: "Program not found" });
  }

  // التحقق من وجود المدينة
  const city = await citymodel.findOne({ cityname: city_name });
  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  // التحقق من وجود الفندق
  const hotel = await hotelmodel.findOne({ name: hotel_name });
  if (!hotel) {
    return res.status(404).json({ message: "Hotel not found" });
  }

  // تحديث البرنامج بالبيانات الجديدة
  program.program_name = program_name;
  program.city_name = city_name;
  program.hotel_name = hotel_name;
  program.trips = trips;
  await program.save();

  return res.json({ message: "Program updated successfully", program });
});




export const deleteprogram = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const deletedprogram = await programmodel.findByIdAndDelete(id);
  if (!deletedprogram) {
    return next(new Error("program not found", { cause: 404 }));
  }
  return res.json({ message: "program deleted successfully", deletedprogram });
}
);



export const programs = asyncHandler(async (req, res, next) => {
  const programs = await programmodel.find()

  return res.json({ message: 'done', programs })
})




