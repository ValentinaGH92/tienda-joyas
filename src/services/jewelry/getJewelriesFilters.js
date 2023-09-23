const pool = require("../../db");
const filterJewelries = require("./utils/filters");

const getJewelriesFilters = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM inventario`);

    const jewelriesFilters = filterJewelries(result.rows, req.query);

    res.status(200).json(res.hateoas(jewelriesFilters));

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error al traer las joyas",
    });

    throw error;
  }
};

module.exports = getJewelriesFilters;
