const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/megaProject`);
        console.log("MongoDB databes is connected")
    } catch (error) {
        console.log("ERROR :", error);
        throw error
    }
};

module.exports = { connectDB }