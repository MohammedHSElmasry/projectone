
import { Schema, model } from 'mongoose'
const programschema = new Schema({
    program_name: {
        type: String,
        required: false,
        unique: false,
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
    trips: [String],
},
    {
        timestamps: true
    })


export const programmodel = model('program', programschema)