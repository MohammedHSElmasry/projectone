import { Schema,model, Types } from "mongoose";

const bokingScheema = new Schema({
  user_id: { type: Types.ObjectId, ref: "user" },
  fname: { type: String },
  lname: { type: String },
  username: { type: String },
  email: { type: String },
  userApplied: {
    trip: { type: Boolean, default: false } ,
    hotel: { type: Boolean, default: false } ,
    program: { type: Boolean, default: false } ,
  },
});

export const bokingmodel = model("boking", bokingScheema);
