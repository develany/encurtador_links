const express = require("express");

const linksController = require("../controllers/linksController");

const linksRoute = express.Router();

linksRoute.get("/links", linksController.buscar);

linksRoute.post("/links", linksController.criar);

linksRoute.get("/links/:code", linksController.buscarPeloCode);


module.exports = linksRoute;
