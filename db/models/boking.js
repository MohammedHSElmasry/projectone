import { Schema, model, Types } from "mongoose";

const bokingScheema = new Schema({
  userid: { type: Types.ObjectId, ref: "user" },
  fname: { type: String },
  lname: { type: String },
  username: { type: String },
  email: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  userApplied: {
    trip: { type: String },
    hotel: { type: String },
    program: { type: String },
  },
});

export const bokingmodel = model("boking", bokingScheema);

