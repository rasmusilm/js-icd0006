import Calculator from "/calculator.js"
import CalculatorUI from "/calculatorUI.js";

let body = document.querySelector("body");
let buttonDiv = document.createElement("div");
buttonDiv.setAttribute("class", "button-container");
let addButton = document.createElement("button");
addButton.innerText = "+";
addButton.setAttribute("class", "positiveButton button");
let removeButton = document.createElement("button");
removeButton.innerText = "-";
removeButton.setAttribute("class", "negativeButton button");
buttonDiv.appendChild(addButton);
buttonDiv.appendChild(removeButton);
let container = document.createElement("div");
console.log('created')
container.setAttribute("id", "calcContainer");
body.appendChild(buttonDiv);
body.appendChild(container);

let calculators = [];
let UIControllers = [];

addButton.addEventListener('click', newInstance);

removeButton.addEventListener('click', removeLastInstance);

function newInstance() {
    console.log("calcN" + calculators.length)
    let newest = new Calculator("calcN" + calculators.length)
    let newestUI = new CalculatorUI("calcN" + calculators.length, newest)
    calculators.push(newest)
    UIControllers.push(newestUI)
    newestUI.draw(container)
    for (let ui in UIControllers) {
        UIControllers[ui].write();
        UIControllers[ui].startListening();
    }
}

function removeLastInstance() {
    if (calculators.length > 0) {
        let calculator = calculators.pop();
        let removableUi = UIControllers.pop();
        let drawing = container.lastElementChild
        drawing.remove();
    }

}