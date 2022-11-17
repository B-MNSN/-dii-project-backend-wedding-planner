const express = require('express');
const router = express.Router();
const Theme = require('../model/theme');

router.get('/', async (req, res) => {
    const result = await Theme.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const themeId = (req.params.id);
    const theme = await Theme.find({ _id: themeId });
    res.json(theme);
});

router.post('/', async (req, res) => {
    try{
        const { theme_name, theme_description, theme_price } = req.body;
        if (!(theme_name && theme_description && theme_price)) {
            res.status(404).send("All input is required");
        }

        const theme = await Theme.create({
            theme_name,
            theme_description,
            theme_price
        })
        res.status(201).json(theme);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;