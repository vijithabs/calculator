let display = document.getElementById("display")

function appendToDisplay(number) {
    display.value = display.value + number
}
function appendToDisplayAdd(operator) {
    display.value = display.value + operator
}
function appendToDisplayMinus(operator) {
    display.value = display.value + operator
}
function appendToDisplayMult(operator) {
    display.value = display.value + operator
}
function appendToDisplayDiv(operator) {
    display.value = display.value + operator
}

function clearDisplay() {
    display.value = ""
}
function appendToDisplayBack() {

    display.value = display.value.slice(0, -1)

}


function calculate() {
    let operator;
    let number1;
    let number2;
    let result;
    console.log(operator);

    if (operator === "+") {
        // display.value = number1 + number2;
        result = number1 + number2
        console.log(result);
    }
    // } else if (operator === "-") {
    //     display.value = number1 - number2;

    // } else if (operator === "*") {
    //     display.value = number1 * number2;

    // } else {
    //     display.value = number1 / number2;
    // }
    display.value = `${result}`
}

