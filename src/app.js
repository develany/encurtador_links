const express = require("express");

const linksRoute = require("./routes/linksRoute");

const app = express();

app.use(express.json());

app.use(linksRoute)

app.listen(8080, () => {
    console.log("Estou loico!");
});
