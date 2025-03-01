function addNumbers(num1, num2){
    return Number(num1) + Number(num2);
}

function subtractNumbers(num1, num2){
    return Number(num1) - Number(num2);
}

function multiplyNumbers(num1, num2){
    return Number(num1) * Number(num2);
}

function divideNumbers(num1, num2){
    if(Number(num2) === 0){
        return "Cannot divide by 0";
    }

    return Number(num1) / Number(num2);
}

// Create function so it performs a calculation based on the operator
function operate(num1, operator, num2){
    if(operator == "+"){
        addNumbers(num1, num2);
    } else if(operator == "-"){
        subtractNumbers(num1, num2);
    }else if(operator == "*"){
        multiplyNumbers(num1, num2);
    }else if(operator == "/"){
        divideNumbers(num1, num2);
    }
}

// Create variables for the selectors and operators & operands
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const dot = document.querySelector("#dot");


// Create a NodeList for the buttons where we get their value
digits.forEach((digit)=>{
    digit.addEventListener("click", (event) => {
        let number = event.target.innerText;
        if(number[0] === "."){
            display.innerText += 0;
            dot.disabled = "true";
        }
        number.replace(/^0+/, "");
        display.innerText += number;
    })
})
