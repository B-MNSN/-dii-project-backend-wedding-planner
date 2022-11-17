const express = require('express');
const router = express.Router();
const Dress = require('../model/dress');

router.get('/', async (req, res) => {
    const result = await Dress.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const dressId = (req.params.id);
    const dress = await Dress.find({ _id: dressId });
    res.json(dress);
});

router.post('/', async (req, res) => {
    try{
        const { dress_name, dress_description, dress_price } = req.body;
        if (!(dress_name && dress_description && dress_price)) {
            res.status(404).send("All input is required");
        }

        const dress = await Dress.create({
            dress_name,
            dress_description,
            dress_price
        })
        res.status(201).json(dress);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;