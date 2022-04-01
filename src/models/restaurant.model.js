const mongoose = require('mongoose');

const restaurantSchemas = new mongoose.Schema({
    restaurant_name: { type: String, required: true },
    img_url: { type: String, required: true },
    delivery_charge: { type: Number, required: true },
    location: { type: String, required: true },
    ratings: { type: Number, required: false },
    category: { type: String, required: true },
    average_time: { type: Number, required: true },
    image: { type: String, required: true },
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Restaurant = mongoose.model("restaurant", restaurantSchemas);
module.exports = Restaurant;