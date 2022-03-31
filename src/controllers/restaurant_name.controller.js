const express = require("express");

const Restaurant = require("../models/restaurant.model");

const router = express.Router();

router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const restaurant = await Restaurant.find({ restaurant_name: { $regex: query, $options: 'i' } });
        console.log({ query });
        return res.status(200).send(restaurant);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;