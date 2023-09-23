const pagination = (array, page, limits, order_by) => {
  const start = (page - 1) * limits;
  const end = start + limits;

  const result = array.slice(start, end);

  if (order_by === "price_asc")
    return result.sort((a, b) => a.precio - b.precio);

  if (order_by === "price_desc")
    return result.sort((a, b) => b.precio - a.precio);

  return result;
};

module.exports = pagination;
