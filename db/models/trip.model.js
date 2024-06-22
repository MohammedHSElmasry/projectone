import { Schema, model } from "mongoose";

const tripSchema = new Schema(
    {
        tripname: {
            type: String,
            required: true,
        },
        cityname: {
            type: String,
            ref: "city",
            required: true,
        },
        price: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            default: '3days'
        },
        image: {
            secure_url: { type: String, required: true },
            public_id: { type: String, required: true }
        },
        tripDate: {
            type: Date,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const tripmodel = model("trip", tripSchema);
