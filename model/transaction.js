const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: String, default: '' },
    step: { type: Number, default: 2},
    guest: { type: Number, default: null },
    theme: { type: String, default: null},
    theme_price: { type: Number, default: 0},
    work: { type: String, default: null},
    food:{ type: String, default: null},
    food_price:{ type: Number, default: 0},
    location: { type: String, default: null },
    location_price: { type: Number, default: 0 },
    dress: { type: String, default: null },
    dress_price: { type: Number, default: 0 },
    photo: { type: String, default: null },
    photo_price: { type: Number, default: 0 },
    card: { type: String, default: null },
    card_price: { type: Number, default: 0 },
    gift: { type: String, default: null},
    gift_price: { type: Number, default: 0},
});

module.exports = mongoose.model('transaction', transactionSchema);