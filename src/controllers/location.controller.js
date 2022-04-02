const express = require("express");

const Restaurant = require("../models/restaurant.model");

const router = express.Router();

const app = express();


router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const restaurant = await Restaurant.find({ location: { $regex: query, $options: 'i' } });
        console.log({ query });
        return res.status(200).send(restaurant);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

router.get("/:location", async (req, res) => {
    try {
        const restaurant = await Restaurant.find({ location: req.params.location }).lean().exec();
        return res.send(restaurant);
        // res.send(restaurant);
    } catch (err) {
        res.status(520).send(err.message);
    }
});

module.exports = router;