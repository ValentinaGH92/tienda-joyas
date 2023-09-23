const pool = require("../../db");
const pagination = require("../../helpers/pagination");

const getJewelries = async (req, res) => {
  try {
    const { limits = 3, page = 1, order_by } = req.query;

    const result = await pool.query(`SELECT * FROM inventario`);
    const jewelries = result.rows;

    const jewelriesWithPagination = pagination(
      jewelries,
      page,
      limits,
      order_by
    );

    res.status(200).json(res.hateoas(jewelriesWithPagination));

    return;
  } catch (error) {
    res.status(500).send({
      message: "Error al traer las joyas",
    });

    throw error;
  }
};

module.exports = getJewelries;
