let num1
let num2
let sign
let resultado
const operacion = {}
let numerosEscritos = document.querySelector("#numeros")

function add(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function multiply(a, b){
    return a * b
}

function divide(a, b){
    return a / b
}

function operate (operator, num1, num2){
    switch (operator){
        case "+":
            return add(num1, num2)
            break;
        case "-":
            return subtract(num1, num2)
            break;
        case "*":
            return multiply(num1, num2)
            break;
        case "/":
            return divide(num1, num2)
            break;
    }
}

function escribirNum(a){
    if (numerosEscritos.textContent.length == 33) numerosEscritos.textContent = numerosEscritos.textContent.slice(1)
    numerosEscritos.textContent = numerosEscritos.textContent + a.textContent
    console.log("que tal")
}

function comienzaOperacion(a){
    operacion.primero = numerosEscritos.textContent
    operacion.signo = a.textContent
    numerosEscritos.textContent = '';
}

function ejecutaOperacion(){
    operacion.primero.includes(".") ? num1 = parseFloat(operacion.primero) : num1 = parseInt(operacion.primero)
    numerosEscritos.textContent.includes(".") ? num2 = parseFloat(numerosEscritos.textContent) : num2 = parseInt(numerosEscritos.textContent)
    resultado = Math.round(operate(operacion.signo, num1, num2))
    numerosEscritos.textContent = resulado.toString().slice(0, 33)
}

let allBNum = document.querySelectorAll(".numero");
for (let i = 0; i < allBNum.length; i++){
    allBNum[i].addEventListener("click", () => escribirNum(allBNum[i]))
}



