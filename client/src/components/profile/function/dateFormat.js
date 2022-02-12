function dateFormat(date) {
  var mm = date.getMonth() + 1;
  var dd = date.getDate();

  return [
    date.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join(".");
}

export default dateFormat;
