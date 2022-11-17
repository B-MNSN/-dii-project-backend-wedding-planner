const express = require('express');
const router = express.Router();
const Food = require('../model/food');

router.get('/', async (req, res) => {
    const result = await Food.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const foodId = (req.params.id);
    const food = await Food.find({ _id: foodId });
    res.json(food);
});

router.post('/', async (req, res) => {
    try{
        const { food_name, food_catagory, food_restaurant, food_lacation, food_description, food_price } = req.body;
        if (!(food_name && food_catagory && food_restaurant && food_lacation && food_description && food_price)) {
            res.status(404).send("All input is required");
        }

        const food = await Food.create({
            food_name,
            food_catagory,
            food_restaurant,
            food_lacation,
            food_description,
            food_price
        })
        res.status(201).json(food);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;

