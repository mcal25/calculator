console.log('bee happy 🐝');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = 2;

let num2 = 3;

// let operator = '+';

function operate(num1, operator, num2) {
    if (operator == 'add') {
        return add(num1, num2);
    }
}

console.log(operate(num1, 'add', num2));