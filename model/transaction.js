const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: String, default: '' },
    step: { type: Number, default: 2},
    guest: { type: Number, default: "" },
    theme: { type: String, default: ""},
    theme_price: { type: Number, default: 0},
    work: { type: String, default: ""},
    food:{ type: String, default: ""},
    food_price:{ type: Number, default: 0},
    location: { type: String, default: "" },
    location_price: { type: Number, default: 0 },
    dress: { type: String, default: "" },
    dress_price: { type: Number, default: 0 },
    photo: { type: String, default: "" },
    photo_price: { type: Number, default: 0 },
    card: { type: String, default: "" },
    card_price: { type: Number, default: 0 },
    gift: { type: String, default: ""},
    gift_price: { type: Number, default: 0},
});

module.exports = mongoose.model('transaction', transactionSchema);