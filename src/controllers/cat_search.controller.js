const express = require("express");

const Dish = require("../models/dish.model");

const router = express.Router();

router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const dish = await Dish.find({ category: { $regex: query, $options: 'i' } });
        console.log({ query });
        return res.status(200).send(dish);
    } catch (err) {
        res.status(501).send(err.message);
    }
});





module.exports = router;