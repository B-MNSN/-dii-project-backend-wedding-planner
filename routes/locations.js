const express = require('express');
const router = express.Router();
const Location = require('../model/location');

router.get('/', async (req, res) => {
    const result = await Location.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const locationId = (req.params.id);
    const location = await Location.find({ _id: locationId });
    res.json(location);
});

router.post('/', async (req, res) => {
    try{
        const { location_img, location_name, location_province, location_description, location_price } = req.body;
        if (!(location_name && location_province && location_description && location_price)) {
            res.status(404).send("All input is required");
        }

        const location = await Location.create({
            location_img,
            location_name,
            location_province,
            location_description,
            location_price
        })
        res.status(201).json(location);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;