"use strict"

export default class Calculator {
    display: string;
    private first: number;
    operator: string;
    waitingSecondOperand: boolean;

    constructor() {
        this.display = "0";
        this.first = 0;
        this.operator = "";
        this.waitingSecondOperand = false;
    }

    setOperator(operator: string) {
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
        if (this.operator === "") {return}
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
        this.operator = "";
        this.display = this.first.toString();
    }

    clear() {
        this.display = "0";
        this.first = 0;
        this.operator = "";
        this.waitingSecondOperand = false
    }
}