const mongoose = require('mongoose');

const dishSchemas = new mongoose.Schema({
    dish_name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: false },
    category: { type: String, required: true },
    restaurant_name: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Dish = mongoose.model("Dish", dishSchemas);
module.exports = Dish;