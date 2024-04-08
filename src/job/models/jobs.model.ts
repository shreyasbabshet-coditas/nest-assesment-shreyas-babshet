import { Schema } from "@nestjs/mongoose";
import mongoose from "mongoose";

export const UsersWithInterest = new mongoose.Schema({
    userId: String
})

export const JobsModal = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    deadline: Date,
    contact: Number,
    email: String,
    archive: Boolean,
    interested: [UsersWithInterest]
})
