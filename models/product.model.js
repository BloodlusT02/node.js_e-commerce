const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    discouct: {
        type: Number,
        default: 0
    },
    bgColor: {
        type: String
    },
    panelColor: {
        type: String
    },
    textColor: {
        type: String
    }
});

module.exports = mongoose.model("Products", productSchema);