const express = require("express");

const Category = require("../models/category.model");

const router = express.Router();

const app = express();


router.get("/search", async (req, res) => {
    try {
        const query = req.query.search;
        const category = await Category.find({ location: { $regex: query, $options: 'i' } });
        console.log({ query });
        return res.status(200).send(category);
    } catch (err) {
        res.status(501).send(err.message);
    }
});

module.exports = router;