const express = require("express");
const router = express.Router();
const ownerModel = require("../models/owner.model");

router.get("/", (req, res) => {
  res.send("owners working");
});

router.post("/create", async (req, res) => {
  try {
    const owner = await ownerModel.find();

    if (owner.length > 0) {
      return res
        .status(403)
        .send("You don't have the permission to create a new admin account");
    }

    const { fullname, email, password } = req.body;



    if (!fullname || !email || !password) {
      return res.status(400).send("Fullname, email, and password are required");
    }

    const createdAdmin = await ownerModel.create({
      fullname,
      email,
      password,
    });

    res.status(201).send(createdAdmin);
  } catch (error) {
    console.error("Error creating admin:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
