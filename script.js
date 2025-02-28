function addNumbers(num1, num2){
    return num1 + num2;
}

function subtractNumbers(num1, num2){
    return num1 - num2;
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

function divideNumbers(num1, num2){
    if(num2 === 0){
        return "Cannot divide by 0";
    }

    return num1 / num2;
}

// Create variables for the selectors and operators & operands
const display = document.querySelector(".display");
const squareView = document.querySelector(".square-view");
const operators = document.querySelector(".operators");
let leftOperand;
let rightOperand;
let operator;
