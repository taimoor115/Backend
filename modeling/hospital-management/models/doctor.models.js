

const mongoose = require("mongoose")

const workInHospitalSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
    },
    workingHour:{
        type: Number,
        required: true,
    }
})

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    experienceInYears: {
        type: Number,
        required: true
    },

    workInHospitals: {
        type: [workInHospitalSchema]
    }

})


const Doctor = mongoose.model("Doctor",doctorSchema)