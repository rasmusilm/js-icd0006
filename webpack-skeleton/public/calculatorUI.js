"use strict"

export default class CalculatorUI {

    constructor(identifier, calculator) {
        this.id = identifier;
        this.calculator = calculator;
        console.log(this.calculator)
    }

    write() {
        document.querySelector("." + this.id).getElementsByClassName('calculator-screen').item(0).value = this.calculator.display;
        console.log(this.screen.value)
        console.log(JSON.stringify(this.calculator))
    }

    draw(container) {
        container.innerHTML += "<div class=\"calculator" + " " + this.id + "\">\n" +
            "\n" +
            "        <input type=\"text\" id=\"screen\" class=\"calculator-screen z-depth-1\" value=\"\" disabled />\n" +
            "\n" +
            "        <div class=\"calculator-keys\">\n" +
            "\n" +
            "            <button type=\"button\" class=\"operator btn btn-info\" value=\"+\">+</button>\n" +
            "            <button type=\"button\" class=\"operator btn btn-info\" value=\"-\">-</button>\n" +
            "            <button type=\"button\" class=\"operator btn btn-info\" value=\"*\">&times;</button>\n" +
            "            <button type=\"button\" class=\"operator btn btn-info\" value=\"/\">&divide;</button>\n" +
            "\n" +
            "            <button type=\"button\" value=\"7\" class=\"btn btn-light waves-effect\">7</button>\n" +
            "            <button type=\"button\" value=\"8\" class=\"btn btn-light waves-effect\">8</button>\n" +
            "            <button type=\"button\" value=\"9\" class=\"btn btn-light waves-effect\">9</button>\n" +
            "\n" +
            "            <button type=\"button\" value=\"4\" class=\"btn btn-light waves-effect\">4</button>\n" +
            "            <button type=\"button\" value=\"5\" class=\"btn btn-light waves-effect\">5</button>\n" +
            "            <button type=\"button\" value=\"6\" class=\"btn btn-light waves-effect\">6</button>\n" +
            "\n" +
            "            <button type=\"button\" value=\"1\" class=\"btn btn-light waves-effect\">1</button>\n" +
            "            <button type=\"button\" value=\"2\" class=\"btn btn-light waves-effect\">2</button>\n" +
            "            <button type=\"button\" value=\"3\" class=\"btn btn-light waves-effect\">3</button>\n" +
            "\n" +
            "            <button type=\"button\" value=\"0\" class=\"btn btn-light waves-effect\">0</button>\n" +
            "            <button type=\"button\" class=\"decimal function btn btn-light\" value=\".\">.</button>\n" +
            "            <button type=\"button\" class=\"all-clear function btn btn-danger btn-sm\" value=\"all-clear\">AC</button>\n" +
            "\n" +
            "            <button type=\"button\" class=\"equal-sign operator btn btn-light\" value=\"=\">=</button>\n" +
            "\n" +
            "        </div>\n" +
            "    </div>";
        this.screen = document.querySelector("." + this.id).getElementsByClassName('calculator-screen').item(0);
        this.write()
        this.startListening()
    }

    startListening() {
        let numpad = document.querySelector("." + this.id).getElementsByClassName("calculator-keys").item(0);

        numpad.addEventListener('click', this.clickAction);
    }

    clickAction = (event) => {
        console.log("press")
        console.log(this)
        const target = event.target;
        if (target.matches("button")) {
            if (!isNaN(target.value) || target.value === ".") {
                if (this.calculator.waitingSecondOperand) {
                    if (typeof(this.calculator.operator) === "object") {
                        this.calculator.clear();
                        this.calculator.display = "";
                        this.calculator.display += target.value;
                    } else {
                        this.calculator.waitingSecondOperand = false;
                        this.calculator.display = target.value;
                    }
                } else {
                    if (this.calculator.display === "0") {
                        this.calculator.display = "";
                    }
                    this.calculator.display += target.value;
                }
                this.write();
            }
            else {
                if (['+', '-', '*', '/'].includes(target.value)) {
                    this.calculator.setOperator(target.value);
                } else if (target.value === "=") {
                    this.calculator.completeOperation();
                } else if (target.value === "all-clear") {
                    this.calculator.clear();
                }
            }
            this.write();
        }
    }

}