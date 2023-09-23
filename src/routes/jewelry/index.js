const express = require("express");
const router = express.Router();
const getJewelries = require("../../services/jewelry/getJewelries");
const getJewelriesFilters = require("../../services/jewelry/getJewelriesFilters");

router.get("/joyas", (req, res) => {
  getJewelries(req, res);
});

router.get("/joyas/filtros", (req, res) => {
  getJewelriesFilters(req, res);
});

module.exports = router;
