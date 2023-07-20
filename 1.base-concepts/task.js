// Task 1
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2)- 4 * a * c;
  if (discr < 0) {
    arr; 
  } else if (discr === 0) {
    let formula = -b/(2*a);
    arr.push(formula)
  } else {
    let formula1 = (-b + Math.sqrt(discr))/(2*a);
    let formula2 = (-b - Math.sqrt(discr))/(2*a);
    arr.push(formula1, formula2)
  } 
  return arr;
}

// Task 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let monthlyPayment = creditBody*(monthlyPercent+(monthlyPercent/((1+monthlyPercent)**countMonths-1)));
  let totalSum = (monthlyPayment*countMonths).toFixed(2);
  return Number(totalSum);
}