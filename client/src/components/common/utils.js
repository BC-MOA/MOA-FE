export const groupBy = (list, key) => {
  return list.reduce(function (carry, el) {
    var group = el[key];

    if (carry[group] === undefined) {
      carry[group] = [];
    }

    carry[group].push(el);
    return carry;
  }, {});
};
