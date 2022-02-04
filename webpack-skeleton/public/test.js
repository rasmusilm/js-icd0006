"use strict"

// find element via id
let button = document.querySelector("#btn-calculate")
let number1 = document.querySelector("#num1")

function showNumber(){
    console.log(number1.value, number1.valueAsNumber);
}

button.onclick = function (event) {
    console.log("button clicked");
    showNumber()
}