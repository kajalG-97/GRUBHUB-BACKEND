const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://grubhub-backend:grubhub-backend@cluster0.10zgd.mongodb.net/grubDatabase?retryWrites=true&w=majority"
    );
};