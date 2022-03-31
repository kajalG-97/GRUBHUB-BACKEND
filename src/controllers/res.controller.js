const express = require("express");

const Restaurant = require("../models/restaurant.model");

const app = express();


const router = express.Router();

// make router for frontend

// posting restaurant
router.post("", async (req, res) => {
    try {
        const restaurant = await Restaurant.create(req.body);
        res.send(restaurant);

    }
    catch (err) {
        res.send(err.message);
    }
})

// getting restaurant
router.get("", async (req, res) => {
    try {
        const count = req.query.count;
        // console.log('count', count);
        const size = count * 9;
        const restaurant = await Restaurant.find().limit(size).lean().exec();
        return res.send(restaurant);
        // res.send(restaurant);
    } catch (err) {
        res.status(520).send(err.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body)
        res.send(restaurant);
    } catch (err) {
        console.log('err', err);
    }
});

router.get("/:restaurant_name", async (req, res) => {
    try {
        const restaurant = await Restaurant.find({ restaurant_name: req.params.restaurant_name }).lean().exec();
        return res.send(restaurant);
        // res.send(restaurant);
    } catch (err) {
        res.status(520).send(err.message);
    }
});

module.exports = router;