const mongoose = require('mongoose');

const photoSchemma = new mongoose.Schema({
    // photo_img: { type:  },
    photo_name: { type: String, default: null },
    photo_description: { type: String, default: null },
    photo_price: { type: Number, default: null }
});

module.exports = mongoose.model('photo', photoSchemma)