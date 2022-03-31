const express = require("express");

const Category = require("../models/category.model");


const router = express.Router();

// make router for frontend

// posting category
router.post("", async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.send(category);

    }
    catch (err) {
        res.send(err.message);
    }
})

// getting category
router.get("", async (req, res) => {
    try {
        const count = req.query.count;
        // console.log('count', count);
        const size = count * 9;
        const category = await Category.find().limit(size).lean().exec();
        return res.send(category);
        // res.send(category);
    } catch (err) {
        res.status(520).send(err.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const category = await category.findByIdAndUpdate(req.params.id, req.body)
        res.send(category);
    } catch (err) {
        console.log('err', err);
    }
})

module.exports = router;