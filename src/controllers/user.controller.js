const express = require('express');
const User = require("../models/user.model");
const router = express.Router();

router.get("", async (req, res) => {
    try {
        let users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
});


router.post("", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.send(user);

    }
    catch (err) {
        res.send(err.message);
    }
});

module.exports = router;