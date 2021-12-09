var tipPercentage = document.getElementById("Percentage-value");
var tipPercentageText = document.getElementById("Percentage");
var NumberOfPersons = document.getElementById("number-of-persones");
var NumberOfPersonsText = document.getElementById("split-value");
var bill = document.getElementById("bill");
var tip = document.getElementById("tip-value");
var total = document.getElementById("total-value");
var billEach = document.getElementById("Bill each");
var tipEach = document.getElementById("Tip each");

tip.innerText = "0 $";
NumberOfPersonsText.innerText = "1 persons";
total.innerText = "0 $";
billEach.innerText = "0 $";
tipEach.innerText = "0 $";

function tipAndTotalCalculator() {
  let tipValue = 0;
  tipValue = (bill.value * tipPercentage.value) / 100;
  tip.innerText = tipValue.toFixed(2) + " $";
  total.innerText =
    (parseFloat(tipValue) + parseFloat(bill.value)).toFixed(2) + " $";
}

bill.oninput = () => {
  tipAndTotalCalculator();
  splitCalculator();
};

tipPercentage.oninput = () => {
  tipPercentageText.innerText = tipPercentage.value + " %";
  tipAndTotalCalculator();
  splitCalculator();
};

function splitCalculator() {
  let price = total.innerText;
  let ttip = tip.innerText;
  price = parseInt(price.replace("$", ""));
  ttip = parseInt(ttip.replace("$", ""));
  billEach.innerText =
    (price / parseInt(NumberOfPersons.value)).toFixed(2) + " $";
  tipEach.innerText = (ttip / NumberOfPersons.value).toFixed(2) + " $";
}

NumberOfPersons.oninput = () => {
  NumberOfPersonsText.innerText = NumberOfPersons.value + " Persons";
  splitCalculator();
};
