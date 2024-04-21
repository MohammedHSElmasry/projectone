import { Schema, model, Types } from "mongoose";

const hotelschema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city_id: {
      type: Types.ObjectId,
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
  },
  {
    timestamps: true,
  }
);

export const hotelmodel = model("hotel", hotelschema);
