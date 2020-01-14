import { round } from "lodash";

const lib = {};

lib.discountFifteenPercent = function(price) {
  const discount = (15 / 100) * price;
  const withDiscount = price - discount;
  return round(withDiscount, 2);
}

export default lib;