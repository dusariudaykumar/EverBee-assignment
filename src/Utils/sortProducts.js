/*
 *    @param
 *    sortBy -> ascending(asc)/descending (desc)
 *    productList -> array
 */

export const sortProducts = (sortBy, productList) => {
  if (sortBy === "asc") {
    return productList.sort((a, b) => Number(a.price) - Number(b.price));
  } else {
    return productList.sort((a, b) => Number(b.price) - Number(a.price));
  }
};
