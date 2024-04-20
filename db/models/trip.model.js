
import { Schema, model ,Types } from "mongoose";

const tripSchema = new Schema(
    {
        tripname: {
            type: String,
            required: true,
            unique: true,
        },
        city_id: {
            type: Types.ObjectId,
            ref: "city",
            required: true,
        },
        price: {
            type: String, required: true
        },
        duration: {
            type: String,
            default: '3days'
        }
    },
    {
        timestamps: true,
    }
);

export const tripmodel = model("trip", tripSchema);
