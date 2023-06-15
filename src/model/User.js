const mongoose = require("mongoose")
const Schema = mongoose.Schema
const validator = require('validator');

const UserSchema = new Schema({
    name:{
        type : String,
        required: [true, "Nom required"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    birthday: { 
        type: Date,
        required: [true, "Date de naissance required"]
    }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema)
module.exports = User