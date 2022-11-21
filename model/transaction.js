const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    user_id: { type: String, default: '' },
    step: { type: Number, default: 1},
    guest: { type: Number, default: null },
    theme: { type: String, default: null},
    work: { type: String, default: null},
    food:{ type: String, default: null},
    location: { type: String, default: null },
    dress: { type: String, default: null },
    photo: { type: String, default: null },
    card: { type: String, default: null },
    gift: { type: String, default: null},
});

module.exports = mongoose.model('transaction', transactionSchema);