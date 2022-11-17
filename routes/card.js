const express = require('express');
const router = express.Router();
const Card = require('../model/card');

router.get('/', async (req, res) => {
    const result = await Card.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const cardId = (req.params.id);
    const card = await Card.find({ _id: cardId });
    res.json(card);
});

router.post('/', async (req, res) => {
    try{
        const { card_name, card_description, card_price } = req.body;
        if (!(card_name && card_description && card_price)) {
            res.status(404).send("All input is required");
        }

        const card = await Card.create({
            card_name,
            card_description,
            card_price
        })
        res.status(201).json(card);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;