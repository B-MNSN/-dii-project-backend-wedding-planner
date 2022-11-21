const express = require('express');
const router = express.Router();
const Gift = require('../model/gift');

router.get('/', async (req, res) => {
    const result = await Gift.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const giftId = (req.params.id);
    const gift = await Gift.find({ _id: giftId });
    res.json(gift);
});

router.post('/', async (req, res) => {
    try{
        const { gift_img, gift_name, gift_store, gift_description, gift_price } = req.body;
        if (!(gift_name && gift_store && gift_description && gift_price)) {
            res.status(404).send("All input is required");
        }

        const gift = await Gift.create({
            gift_img,
            gift_name,
            gift_store,
            gift_description,
            gift_price
        })
        res.status(201).json(gift);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;