const filterJewelries = (jewelries, filters) => {
  const { precio_max, precio_min, categoria, metal } = filters;
  let jewelriesFilters = jewelries;

  if (precio_max)
    jewelriesFilters = jewelriesFilters.filter(
      (jewelry) => jewelry.precio <= precio_max
    );

  if (precio_min)
    jewelriesFilters = jewelriesFilters.filter(
      (jewelry) => jewelry.precio >= precio_min
    );

  if (categoria)
    jewelriesFilters = jewelriesFilters.filter(
      (jewelry) => jewelry.categoria === categoria
    );

  if (metal)
    jewelriesFilters = jewelriesFilters.filter(
      (jewelry) => jewelry.metal === metal
    );

  return jewelriesFilters;
};

module.exports = filterJewelries;
