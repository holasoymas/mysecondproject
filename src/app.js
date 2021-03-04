require('dotenv').config();
const express = require('express');
require("../db/conn");
const User = require("../models/usermag");
const hbs = require('hbs');
const path = require('path');


const app = express();
const port = process.env.PORT || 1000;

// setting a path
const staticPath = path.join(__dirname , "../public");
const templatesPath = path.join(__dirname , "../templates/views");
const partialPath = path.join(__dirname , "../templates/partials");

// middlewere
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist/dist")));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialPath);


 app.get("/", (req, res) =>
{
    res.render("index");
 });
app.post("/contact", async (req, res) =>
{
    try {
        // res.send(req.body);
        const userdata = new User(req.body);
        await userdata.save();
        res.status(201).render("index")
    } catch (error) {
        res.status(500).send(error);
    }
 });

app.listen(port, () =>
{
    console.log("i am listening");
});
