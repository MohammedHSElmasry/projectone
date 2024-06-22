import { Schema, model } from "mongoose";

const hotelschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cityname: {
      type: String,
      ref: "city",
      required: true,
    },
    singleRoomprice: {
      type: String,
      required: true,
    },
    doubleRoomprice: {
      type: String,
      required: true,
    },
    image: {
      secure_url: { type: String, required: true },
      public_id: { type: String, required: true }
    },
    bookingStartDate: {
      type: Date,
      required: true,
    },
    bookingEndDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const hotelmodel = model("hotel", hotelschema);
