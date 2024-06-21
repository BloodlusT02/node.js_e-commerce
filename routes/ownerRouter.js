const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

router.get("/", (req, res) => {
    res.send("owners working")
});

router.post("/create", async (req, res) => {

    const owner = await ownerModel.find();

    if(owner.length > 0){
        return res.status(500).send("You dont have the permission to create a new admin account")
    };

    const { fullname, email, password } = req.body;

    const createdAdmin = await ownerModel.create({
        fullname, email, password
    });

    res.status(201).send(createdAdmin);

});

module.exports = router