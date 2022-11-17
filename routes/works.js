const express = require('express');
const router = express.Router();
const Work = require('../model/work');

router.get('/', async (req, res) => {
    const result = await Work.find({});
    res.send(result);
});

router.get('/:id', async (req, res) => {
    const workId = (req.params.id);
    const work = await Work.find({ _id: workId });
    res.json(work);
});

router.post('/', async (req, res) => {
    try{
        const { work_name } = req.body;
        if (!(work_name)) {
            res.status(404).send("All input is required");
        }

        const work = await Work.create({
            work_name
        })
        res.status(201).json(work);
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;