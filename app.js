require('dotenv').config();
require('./config/database').connect();

const express = require('express');
// const User = require('./model/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

const register = require('./routes/register');
const login = require('./routes/login');

const app = express();

app.use(express.json());

app.use('/register', register);
app.use('/login', login);

app.post('/welcome', auth, (req, res) => {
    res.status(200).send('Welcome Beer world 🙏');

})

module.exports = app;