const mongoose = require('mongoose');

const giftSchemma = new mongoose.Schema({
    // gift_img: { type:  },
    gift_name: { type: String, default: null },
    gift_description: { type: String, default: null },
    gift_price: { type: Number, default: null }
});

module.exports = mongoose.model('gift', giftSchemma)