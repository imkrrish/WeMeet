const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

require('../DB/connection');

const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send(`hello router`);
});


// registration route

router.post('/register', async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(422).json({ err: "filed required" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ err: "email already exist" })
        }

        const user = new User({ firstName, lastName, email, password });

        const userRegister = await user.save();

        if (userRegister) {
            res.status(201).json({ message: "registered" })
        }

    } catch (error) {
        console.log(error);
    }
})


// Login route 

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ err: "plz fill the fields" })
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            // console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ message: "user error" });
            }
            else {
                res.json({ message: "signin successful" });
            }
        } else {
            res.status(400).json({ message: "user error" });
        }



    } catch (error) {
        console.log(error);
    }
})


module.exports = router;