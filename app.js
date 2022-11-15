require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const User = require('./model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

const app = express();

app.use(express.json());

// Login gose here

//Register
app.post('/register', async (req, res) => {
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

//Login
app.post('/login', async (req, res) => {
    try{
        //Get user input
        const { email, password } = req.body;

        //Validate user input
        if(!(email && password)){
            res.status(400).send('All input is required');

        }

        //Validate if user exists ino our database
        const user = await User.findOne({ email });

        if(user && (await bcrypt.compare(password, user.password))){
            //Create token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h'
                }
            )
            //save user token
            user.token = token;

            res.status(200).send(user);
        }
        res.status(400).send("Invalid Credentials");
    }
    catch(err){
        console.log(err)
    }
});


app.post('/welcome', auth, (req, res) => {
    res.status(200).send('Welcome 🙏');

})

module.exports = app;