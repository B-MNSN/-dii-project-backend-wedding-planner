require('dotenv').config();
require('./config/database').connect();

const express = require('express');
var cors = require('cors');
// const User = require('./model/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth');

const register = require('./routes/register');
const login = require('./routes/login');
const foods = require('./routes/foods');
const works = require('./routes/works');
const theme = require('./routes/themes');
const location = require('./routes/locations');
const dress = require('./routes/dress');
const photo = require('./routes/photo');
const card = require('./routes/card');
const gift = require('./routes/gift');
const organiz = require('./routes/organiz');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/register', register);
app.use('/login', login);
app.use('/food', foods);
app.use('/works', works);
app.use('/theme', theme);
app.use('/location', location);
app.use('/dress', dress)
app.use('/photo', photo);
app.use('/card', card);
app.use('/gift', gift);
app.use('/organiz', organiz);  

app.post('/welcome', auth, (req, res) => {
    res.status(200).send('Welcome Beer world 🙏');

})

module.exports = app;