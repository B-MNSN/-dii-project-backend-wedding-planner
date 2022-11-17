const mongoose = require('mongoose');

const locationScheme = new mongoose.Schema({
    // location_img: { type: 'image'},
    location_name: {type: String},
    location_province: {type: String},
    location_description: { type: String},
    location_price: {type: Number},

});

module.exports = mongoose.model('location', locationScheme);