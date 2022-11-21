const express = require('express');
const router = express.Router();
const Photo = require('../model/photo');

router.get('/', async (req, res) => {
    const result = await Photo.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const photoId = (req.params.id);
    const photo = await Photo.find({ _id: photoId });
    res.json(photo);
});

router.post('/', async (req, res) => {
    try{
        const { photo_img, photo_name, photo_description, photo_price } = req.body;
        if (!(photo_name && photo_description && photo_price)) {
            res.status(404).send("All input is required");
        }

        const photo = await Photo.create({
            photo_img,
            photo_name,
            photo_description,
            photo_price
        })
        res.status(201).json(photo);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;