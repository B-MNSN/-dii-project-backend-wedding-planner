const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try{
        //Get user input
        const { first_name, last_name, email, password } = req.body;

        //Validate user input
        if(!(email && password && first_name && last_name)){
            res.status(400).send('All input is required');
        }

        //check if user already exists
        //Validate if user exists in our database
        const oldUser = await User.findOne({ email });

        if(oldUser){
            return res.status(409).send('User already exists. Please Login');
        }

        // Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        //Create user in our database
        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword

        })

        //Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h'
            }
        );

        //save user token
        user.token = token;

        //return new user
        res.status(201).send(user);

    } catch(err) {
        console.log(err)
    }
});

module.exports = router;