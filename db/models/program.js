
import { Schema, model } from 'mongoose'
const programschema = new Schema({
    program_name: {
        type: String,
        required: false,
    },
    city_name: {
        type: String,
        required: false,
        unique: false,
    },
    hotel_name: {
        type: String,
        required: false,
        unique: false,
    },
    hotelimage: {
        secure_url: { type: String},
        public_id: { type: String}
      },
    trips: [String],
    programStartDate: {
        type: Date,
        required: true,
    },
    programEndDate: {
        type: Date,
        required: true,
    }
},
    {
        timestamps: true
    })


export const programmodel = model('program', programschema)