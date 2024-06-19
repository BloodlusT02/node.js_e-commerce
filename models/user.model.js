const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
    orders: {
        type: Array,
        default: []
    },
    contact: {
        type: Number,
        required: true
    },
    picture: {
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);