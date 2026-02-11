let display = document.getElementById("display");
let result = document.getElementById("result");

function appendToDisplay(number) {
  display.value = display.value + number;
}
function appendToDisplayAdd(operator) {
  display.value = display.value + operator;
}
function appendToDisplayMinus(operator) {
  display.value = display.value + operator;
}
function appendToDisplayMult(operator) {
  display.value = display.value + operator;
}
function appendToDisplayDiv(operator) {
  display.value = display.value + operator;
}

function clearDisplay() {
  display.value = "";
}
function appendToDisplayBack() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let operator;
  let expression = display.value;

  let index;

  console.log(operator);
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] == "+" ||
      expression[i] == "-" ||
      expression[i] == "*" ||
      expression[i] == "/"
    ) {
      operator = expression[i];
      index = i;
      break;
    }
  }
  let number1 = Number(expression.slice(0, index));
  let number2 = Number(expression.slice(index + 1));

  let result;

  if (operator === "+") {
    result = number1 + number2;

    console.log(result);
  } else if (operator === "-") {
    result = number1 - number2;
    console.log(result);
  } else if (operator === "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }
  display.value = `${result}`;

}
