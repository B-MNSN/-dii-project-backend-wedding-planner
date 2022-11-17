const mongoose = require('mongoose');

const themeSchemma = new mongoose.Schema({
    // theme_img: { type:  },
    theme_name: { type: String, default: null },
    theme_description: { type: String, default: null },
    theme_price: { type: Number, default: null }
});

module.exports = mongoose.model('theme', themeSchemma)