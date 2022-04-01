const express = require("express");

const Dish = require("../models/dish.model");

const app = express();


const router = express.Router();

// make router for frontend

// posting dish
router.post("", async (req, res) => {
    try {
        const dish = await Dish.create(req.body);
        res.send(dish);

    }
    catch (err) {
        res.send(err.message);
    }
})

// getting dish
router.get("", async (req, res) => {
    try {
        const count = req.query.count;
        // console.log('count', count);
        const size = count * 9;
        const dish = await Dish.find().limit(size).lean().exec();
        return res.send(dish);
        // res.send(dish);
    } catch (err) {
        res.status(520).send(err.message);
    }
});

router.get("/:category", async (req, res) => {
    try {
        const dish = await Dish.find({ category: req.params.category }).lean().exec();
        return res.send(dish);
        // res.send(dish);
    } catch (err) {
        res.status(520).send(err.message);
    }
});



router.patch("/:id", async (req, res) => {
    try {
        const dish = await Dish.findByIdAndUpdate(req.params.id, req.body)
        res.send(dish);
    } catch (err) {
        console.log('err', err);
    }
})

module.exports = router;