const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
require('dotenv').config()

router.get('/', auth, async (req, res) => {
    const result = await User.find({});
    res.send(result);
});

router.get('/getuser', auth, async (req, res) => {
    const result = await User.findById({_id: req.user.user_id});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const userId = (req.params.id);
    const user = await User.find({ _id: userId });
    res.json(user);
});

router.post('/', async (req, res) => {
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
                process.env.TOKEN_KEY
               
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

module.exports = router;