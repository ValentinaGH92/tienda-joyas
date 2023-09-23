const jewelryRoutes = require("./jewelry");

const routes = (app) => {
  app.use("/", jewelryRoutes);
};

module.exports = routes;
