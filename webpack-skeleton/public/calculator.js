"use strict"

export default class Calculator {

    constructor(identifier) {
        this.display = "0";
        this.first = null;
        this.operator = null;
        this.waitingSecondOperand = false;
        this.identifier = identifier;
    }

    setOperator(operator) {
        if (this.waitingSecondOperand) {
            if (operator !== this.operator) {
                this.operator = operator;
                return;
            }
        }
        this.completeOperation();
        this.operator = operator;
        this.waitingSecondOperand = true;
        this.first = parseFloat(this.display);
        console.log(operator);
    }

    completeOperation() {
        let second = parseFloat(this.display);
        if (typeof(this.operator) === "object") {return}
        console.log("complete");
        switch (this.operator) {
            case "+":
                this.first += second;
                break;
            case "-":
                this.first -= second;
                break;
            case "*":
                this.first *= second;
                break;
            case "/":
                this.first /= second;
                break;
        }
        this.waitingSecondOperand = true;
        this.operator = null;
        this.display = this.first;
    }

    clear() {
        this.display = "0";
        this.first = null;
        this.operator = null;
        this.waitingSecondOperand = false
    }
}