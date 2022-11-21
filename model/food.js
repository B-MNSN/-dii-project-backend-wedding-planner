const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    food_img: { type: String },
    food_name: { type: String },
    food_catagory: { type: String },
    food_restaurant: { type: String },
    food_location: { type: String },
    food_description: { type:String },
    food_price: { type: Number },

});

module.exports = mongoose.model('food', foodSchema);
