const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const favoriteSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}) 

const Favorite = mongoose.model("Favorite", favoriteSchema)

module.exports = Favorite;