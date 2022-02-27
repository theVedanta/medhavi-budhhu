const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 4000;
const path = require("path");
const axios = require("axios").default;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", async (req, res) => {
    const ipJson = await axios.get("https://ipinfo.io/json");
    // const ip = await ipJson.json();
    res.render("index", { ip: ipJson.data.ip });
});

app.listen(port, (err) => {
    console.log("Listening on " + port);
    if (err) throw err;
});
