const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken  } = require("../utils/generateToken");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password, contact } = req.body;

        let user = await userModel.findOne({email: email});

        if(user){
            return res.status(401).send("You already have an account, please login")
        }
    
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, async function (err, hash) {
            if (err) return res.send(err.message);
            else{
                let user = await userModel.create({
                    fullname,
                    email,
                    password: hash,
                    contact
                });
    
                let token = generateToken(user);
                res.cookie("token", token);
                res.send("user created successfully")
            };
          });
        });
    
      } catch (error) {
        res.send(error);
      }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body

    let user = await userModel.findOne({email: email});
    if(!user) return res.send("Email or Password is incorrect");

    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            const token = generateToken(user);
            res.cookie("token", token);
            res.send("You can login")
        }else{
            return res.send("Email or Password is incorrect");
        }
    });
};

module.exports = { registerUser, loginUser }

