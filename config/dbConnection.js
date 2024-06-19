const mongoose = require("mongoose");

const connectDB = () => {
    try {
        mongoose.connect("mongodb://localhost:27017/megaProject");
        console.log("MongoDB databes is connected")
    } catch (error) {
        console.log("ERROR :", error);
        throw error
    }
};

module.exports = { connectDB }