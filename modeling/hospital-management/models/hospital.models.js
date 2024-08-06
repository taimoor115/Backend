

const mongoose = require("mongoose")


const hospitalSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
        },
        specializedIn: [
            {
                type: String
            }
        ],
        pincode: {
            type: String,
        }
})


const Hospital = mongoose.model("Hospital",hospitalSchema)