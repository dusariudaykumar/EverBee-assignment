/*
 *    @param
 *    item -> values we want to search
 *    itemsList -> array
 */
export const searchItem = (item, itemsList) => {
  if (item) {
    return itemsList.filter((product) =>
      product.title.toLowerCase().includes(item.toLowerCase())
    );
  }
  return itemsList;
};
