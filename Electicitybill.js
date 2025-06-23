/*
Question: Count the electicity bill by the units using the following schema
  =<100 units: 4.2rs/unit
  >100 && =<200 units: 6rs/unit
  > 200 && =< 400 units: 8rs / unit
  > 400 : 13rs / unit

*/

const units = 500;

function countBill(unit) {
  let cost = 0;
  if (unit > 400) {
    cost += (unit - 400) * 13;
    unit = 400;
  }
  if (unit > 200) {
    cost += (unit - 200) * 8;
    unit = 200;
  }
  if (unit > 100) {
    cost += (unit - 100) * 6;
    unit = 100;
  }
  if (unit > 0) {
    cost += unit * 4.2;
  }
  return cost;
}

console.log(countBill(800));
