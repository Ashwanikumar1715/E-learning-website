const express = require('express');
const hbs = require('hbs');
const path = require('path');

require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;

//setting path
const staticPAth = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../tempelates/views");
const partial_path = path.join(__dirname, "../tempelates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path);

app.use(express.static(staticPAth));

app.get("/", (req, res) => {
    res.render("index");
})
app.get("/html_css", (req, res) => {
    res.render("html_css");
})
app.get("/clanguage", (req, res) => {
    res.render("clanguage");
})
app.get("/webdesign", (req, res) => {
    res.render("webdesign");
})
app.get("/quiz", (req, res) => {
    res.render("quiz");
})
app.get("/dsa", (req, res) => {
    res.render("dsa");
})
app.get("/login", (req, res) => {
    res.render("login");
})

app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
})

