const mongoose = require('mongoose');

const dressSchemma = new mongoose.Schema({
    dress_img: { type: String },
    dress_name: { type: String, default: null },
    dress_description: { type: String, default: null },
    dress_price: { type: Number, default: null }
});

module.exports = mongoose.model('dress', dressSchemma)