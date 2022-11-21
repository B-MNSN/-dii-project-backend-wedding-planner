const mongoose = require('mongoose');

const giftSchemma = new mongoose.Schema({
    gift_img: { type: String },
    gift_name: { type: String, default: null },
    gift_store: { type: String, default: null},
    gift_description: { type: String, default: null },
    gift_price: { type: Number, default: null }
});

module.exports = mongoose.model('gift', giftSchemma)