console.log('bee happy 🐝');

function add(a, b) {
    return Number(a) + Number(b);
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

let num1;

let num2;

let currentTotal = 0;

let operator;

let getDisplayNumber = function() {
    return document.querySelector('#display-number').innerHTML;
}

let setDisplayNumber = function(n) {
    document.querySelector('#display-number').innerHTML = n;
}


function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    }
}

console.log(operate(num1, 'add', num2));


function applyEventListeners() {
    let numberButtons = document.querySelectorAll('.number-button');
    let operatorButtons = document.querySelectorAll('.operator-button');
    let equalsButton = document.querySelector('#equals');
    let clrButton = document.querySelector('#clr');

    numberButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(button.innerHTML)
            if (document.querySelector('#display-number').innerHTML == '0') {
                document.querySelector('#display-number').innerHTML = '';
            }
            if (num1 != undefined) {
                setDisplayNumber('');
            }
            
            document.querySelector('#display-number').innerHTML += button.innerHTML;
        })
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', function() {
            num1 = getDisplayNumber();
            operator = button.innerHTML;
            button.style.boxShadow = 'inset 0 0 0 10px #9980be';
            // document.getElementById(`#${button.innerHTML}`).;
        })
    });

    clrButton.addEventListener('click', function() {
        setDisplayNumber('0');
        currentTotal = 0;
    });

    equalsButton.addEventListener('click', function() {
        num2 = getDisplayNumber();
        let result = operate(num1, operator, num2);
        setDisplayNumber(result);
        currentTotal = result;
    });

}

applyEventListeners();

// numButtonFunction(button, eventlistener) {
//     // adds event listener that will populate displayNumber div with the current number
// }


// document.getElementById('display-number').textContent = '235235';


// console.log(document.querySelectorAll('.number-button').forEach(div => console.log(div.innerHTML)));