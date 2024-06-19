const express = require("express");
const app = express();
const PORT = 3000;
const cookieParser = require("cookie-parser");
const path = require("path");

const { connectDB } = require("./config/dbConnection");
connectDB();

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const ownerRouter = require("./routes/ownerRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});