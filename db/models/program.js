
import { Schema, model } from 'mongoose'
const programschema = new Schema({
    program_name: {
        type: String,
        required: true,
        unique: true,
    },
    city_name: {
        type: String,
        required: true,
        unique: false,
    },
    hotel_name: {
        type: String,
        required: true,
        unique: false,
    },
    trips: [String]
},
    {
        timestamps: true
    })


export const programmodel = model('proram', programschema)