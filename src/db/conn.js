
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const url = "mongodb://127.0.0.1:27017";

mongoose.connect(url).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});