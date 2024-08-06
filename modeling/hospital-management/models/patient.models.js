

const mongoose = require("mongoose")


const patientSchema = new mongoose.Schema({
    
},{timestamps: true})


const Patient = mongoose.model("Patient",patientSchema)