const express = require('express');

const connect = require('./configs/db');

const userController = require("./controllers/user.controller");

const { register, login } = require("./controllers/auth.controller");


const cors = require('cors');

const port = process.env.PORT || 7000;

const categoryController = require("./controllers/categary.controller");

const dishController = require("./controllers/dish.controller");

const resController = require("./controllers/res.controller");

const dish_search = require("./controllers/dish_name.controller");

const res_search = require("./controllers/restaurant_name.controller");

const cat_search = require("./controllers/cat_search.controller");

const location_search = require("./controllers/location.controller");

const app = express();

app.use(cors());

app.use(express.json());


app.use("/category", categoryController);

app.use("/dish", dishController);

app.use("/restaurant", resController);

app.use("/location", location_search);

app.use("/dish_name", dish_search);

app.use("/category", cat_search);

app.use("/category", dishController);

app.use("/restaurant_name", res_search);

app.use("/users", userController);

app.post("/register", register);

app.post("/login", login);

app.listen(port, async () => {
    try {
        await connect();
        console.log(`running on port ${port}`);

    } catch (err) {
        console.log('err', err.massage);

    }
});