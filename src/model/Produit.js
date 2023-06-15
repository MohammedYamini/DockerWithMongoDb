const mongoose = require("mongoose")
const Schema = mongoose.Schema
const validator = require('validator');

const ProductSchema = new Schema({
    name:{
        type : String,
        required: [true, "Nom required"]
    },
    description: {
        type: String,
        required: [true, "Description required"]
    },
    price: { 
        type: Number,
        required: [true, "Prix required"]
    },
    UserId: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
}, { timestamps: true })

const Product = mongoose.model("Produit", ProductSchema)
module.exports = Product