const mongoose = require('mongoose');

const organizSchemma = new mongoose.Schema({
    organiz_img: { type: String },
    organiz_name: { type: String, default: null },
    organiz_description: { type: String, default: null },
});

module.exports = mongoose.model('organiz', organizSchemma)