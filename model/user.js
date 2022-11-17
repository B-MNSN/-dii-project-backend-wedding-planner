const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { type: String, default: null},
    email: { type: String, default: true},
    password: { type: String},
    token: { type: String }

});

module.exports = mongoose.model('user', userSchema);