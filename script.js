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

console.log(divideNumbers(3, 0))