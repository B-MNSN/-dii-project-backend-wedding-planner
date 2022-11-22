const mongoose = require('mongoose');

const organizSchemma = new mongoose.Schema({
    organiz_img: { type: String },
    organiz_name: { type: String, default: '' },
    organiz_description: { type: String, default: '' }, 
    organiz_theme: { type: String, default: ''},
    organiz_food: { type: String, default: ''},
    organiz_location: { type: String, default: ''},
    organiz_dress: { type: String, default: ''},
    organiz_photo: { type: String, default: ''},
    organiz_card: { type: String, default: ''},
    organiz_gift: { type: String, default: ''},

});

module.exports = mongoose.model('organiz', organizSchemma)