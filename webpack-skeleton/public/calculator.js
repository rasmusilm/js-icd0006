
let calculator = {
    display: "0",
    first: null,
    operator: null,
    waitingSecondOperand: false
};

const screen = document.querySelector('#screen')

function write() {
    screen.value = calculator.display;
    console.log(JSON.stringify(calculator))
}

function setOperator(operator) {
    if (calculator.waitingSecondOperand) {
        if (operator !== calculator.operator) {
            calculator.operator = operator;
            return;
        }
    }
    completeOperation();
    calculator.operator = operator;
    calculator.waitingSecondOperand = true;
    calculator.first = parseFloat(calculator.display);
    console.log(operator);
}

function completeOperation() {
    let second = parseFloat(calculator.display);
    if (typeof(calculator.operator) === "object") {return}
    console.log("complete");
    switch (calculator.operator) {
        case "+":
            calculator.first += second;
            break;
        case "-":
            calculator.first -= second;
            break;
        case "*":
            calculator.first *= second;
            break;
        case "/":
            calculator.first /= second;
            break;

    }
    calculator.waitingSecondOperand = true;
    calculator.operator = null;
    calculator.display = calculator.first;
    write();
}

function clear() {
    console.log("clear");
    calculator = {
        display: "0",
        first: null,
        operator: null,
        waitingSecondOperand: false
    };
    write();
}

const numpad = document.querySelector(".calculator-keys");

numpad.addEventListener('click', function (event) {
    const target = event.target;
    if (target.matches("button")) {
        if (!isNaN(target.value) || target.value === ".") {
            if (calculator.waitingSecondOperand) {
                if (typeof(calculator.operator) === "object") {
                    clear();
                    calculator.display = "";
                    calculator.display += target.value;
                } else {
                    calculator.waitingSecondOperand = false;
                    calculator.display = target.value;
                }
            } else {
                if (calculator.display === "0") {
                    calculator.display = "";
                }
                calculator.display += target.value;
            }
            write();
        }
        else {
            if (['+', '-', '*', '/'].includes(target.value)) {
                setOperator(target.value);
            } else if (target.value === "=") {
                completeOperation();
            } else if (target.value === "all-clear") {
                clear();
            }
        }
    }

});

write();