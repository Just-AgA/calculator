function addNumbers(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtractNumbers(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiplyNumbers(num1, num2) {
    return Number(num1) * Number(num2);
}

function divideNumbers(num1, num2) {
    if (Number(num2) === 0) {
        return "Cannot divide by 0";
    }
    return Number(num1) / Number(num2);
}

// Function to perform the calculation based on the operator
function operate(num1, operator, num2) {
    if (operator === "+") {
        return addNumbers(num1, num2);
    } else if (operator === "-") {
        return subtractNumbers(num1, num2);
    } else if (operator === "*") {
        return multiplyNumbers(num1, num2);
    } else if (operator === "/") {
        return divideNumbers(num1, num2);
    }
}

// Create variables for the selectors and operators & operands
const result = document.querySelector(".result");
const digits = document.querySelectorAll(".digit");
const equal = document.querySelector("#equal");
const clearAll = document.querySelector("#clear-all");
const percentButton = document.querySelector("#percentage");

// Create variables to hold the result of the operands and the operator
let leftOperand = "";
let rightOperand = "";
let operator = "";
let isResultDisplayed = false;

// Create a NodeList for the buttons where we get their value
digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
        let number = event.target.innerText.trim();

        // If result is already displayed, clear it before adding the new number
        if (isResultDisplayed) {
            result.innerText = "";
            isResultDisplayed = false;
        }

        if (result.innerText === "0" || result.innerText === "") {
            result.innerText = "";
        }

        if (number === ".") {
            // If the result is empty (first character), add "0."
            if (result.innerText === "") {
                result.innerText = "0.";
            } else {
                // Prevent more than one dot in a number
                if (!result.innerText.includes(".")) {
                    result.innerText += number;
                }
            }
            return; // Don't continue further if it's a dot
        }

        // Add the digits to the result display
        result.innerText += number;

        if (number === "+" || number === "-" || number === "*" || number === "/") {
            operator = number;
            // Clear the result display to start entering the right operand
            result.innerText = "";
        }

        // If no operator yet, this number goes into leftOperand
        if (operator === "") {
            leftOperand = result.innerText;
        } else {
            // After the operator is pressed, the second operand is updated
            rightOperand = result.innerText;
        }
    });
});

