import { Schema, model } from "mongoose";

const citySchema = new Schema(
  {
    cityname: {
      type: String,
      required: true,
      unique: true,
    },
    cityImage: { secure_url: String, public_id: String },
  },
  {
    timestamps: true,
  }
);

export const citymodel = model("city", citySchema);
