import { round, forEach } from "lodash";

const lib = {};

lib.discountFifteenPercent = function(price) {
  const discount = (15 / 100) * price;
  const withDiscount = price - discount;
  return round(withDiscount, 2);
};

lib.applyNameFilter = function(products, name) {
  const filter = name.toLowerCase();
  const newProductList = [];

  forEach(products, prod => {
    if (prod.title.toLowerCase().indexOf(filter) > -1) {
      pushProduct(prod);
    }
  });

  function pushProduct(product) {
    if (newProductList.length > 0) {
      forEach(newProductList, listItem => {
        if (listItem.id === product.id) {
          return;
        }
      });
    }

    newProductList.push(product);
  }

  return newProductList;
};

export default lib;
