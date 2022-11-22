const express = require('express');
const router = express.Router();
const Transaction = require('../model/transaction');
const auth = require('../middleware/auth')

router.get('/', async (req, res) => {
    const result = await Transaction.find({});
    res.send(result);
});

router.get('/:id', auth, async (req, res) => {
    try {
        const transactionId = (req.params.id);
    const transaction = await Transaction.findById({ _id: transactionId });
    res.json(transaction);
    } catch (e) {
        console.error(e);
    }
});

router.get('/getuser/:id', auth, async (req, res) => {
    try {
        const tranUserID = (req.params.id);
        const transaction = await Transaction.find({ });
        const result = transaction.filter((x) => x.user_id == tranUserID)
        res.json(result);
    } catch (e) {
        console.error(e);
    }
});

router.post('/', async (req, res) => {
    try{
        const { user_id, guest, theme,  theme_price, work, food, food_price, loacation, location_price, dress, dress_price, photo, photo_price, card, card_price, gift, gift_price } = req.body;

        const transaction = await Transaction.create({
            user_id,
            guest,
            theme,
            theme_price,
            work,
            food,
            food_price,
            loacation,
            location_price,
            dress,
            dress_price,
            photo,
            photo_price,
            card,
            card_price,
            gift,
            gift_price
        })
        res.status(201).json(transaction);
    } catch (err) {
        console.log(err);
    }
});

router.put('/update/:id', async (req, res) => {
    const transactionID = req.params.id;
    const update = req.query.update;
    const { value } = req.body;
    console.log(transactionID);
    console.log(value);
    const data = {
        $set: {
            [update]: value,
        }
    }
    const updateDatabase = await Transaction.updateOne({ _id: transactionID }, data);
    res.sendStatus(200, updateDatabase);
});

module.exports = router;