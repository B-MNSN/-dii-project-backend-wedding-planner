const mongoose = require('mongoose');

const cardSchemma = new mongoose.Schema({
    card_img: { type: String },
    card_name: { type: String, default: null },
    card_description: { type: String, default: null },
    card_price: { type: Number, default: null }
});

module.exports = mongoose.model('card', cardSchemma)