import { Schema, model } from "mongoose";

const citySchema = new Schema(
  {
    cityname: {
      type: String,
      required: true,
      unique: true,
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

export const citymodel = model("city", citySchema);
