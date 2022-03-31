const mongoose = require('mongoose');

const categorySchemas = new mongoose.Schema({
    category_name: { type: String, required: true },
    image: { type: String, required: true },
    location: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true,
    }
);

const Category = mongoose.model("Category", categorySchemas);
module.exports = Category;