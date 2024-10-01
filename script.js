let num1
let num2
let sign
let resultado
let permisoBorrado
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
    if (b === 0){
        operacion.signo = undefined
        operacion.primero = undefined
        numerosEscritos.textContent = '0'
        return alert("Buen intento")
    }
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
    if (numerosEscritos.textContent === "0" || permisoBorrado){
        if (a.textContent === "."){
            numerosEscritos.textContent = "0."
            permisoBorrado = false;
        }
        else{
            numerosEscritos.textContent = a.textContent
            permisoBorrado = false;
        }
        
    } 
    else{
        if (numerosEscritos.textContent.length == 12) numerosEscritos.textContent = numerosEscritos.textContent.slice(1)
        numerosEscritos.textContent = numerosEscritos.textContent + a.textContent
    }
}

function comienzaOperacion(a){
    operacion.primero = numerosEscritos.textContent
    operacion.signo = a.textContent
    permisoBorrado = true;
}

function ejecutaOperacion(a){
    if (operacion.primero && operacion.signo){
        operacion.primero.includes(".") ? num1 = parseFloat(operacion.primero) : num1 = parseInt(operacion.primero)
        numerosEscritos.textContent.includes(".") ? num2 = parseFloat(numerosEscritos.textContent) : num2 = parseInt(numerosEscritos.textContent)
        resultado = operate(operacion.signo, num1, num2)
        if (resultado > 999999999999){
            numerosEscritos.textContent = NaN
        }
        else {
            numerosEscritos.textContent = resultado.toString().slice(0, 12)
        }
        operacion.primero = numerosEscritos.textContent;
        permisoBorrado = true;
    }
    else{
        if (a.textContent === "="){
            alert("¡Error!")
            numerosEscritos.textContent = '0'
            operacion.signo = undefined;
            operacion.primero = undefined;
        } 
    }
}

let allBNum = document.querySelectorAll(".numero");
for (let i = 0; i < allBNum.length; i++){
    allBNum[i].addEventListener("click", () => escribirNum(allBNum[i]))
}

let allBSign = document.querySelectorAll(".bsigno")
for (let i = 0; i < allBSign.length; i++){
    allBSign[i].addEventListener("click", () => {
        ejecutaOperacion(allBSign[i])
        comienzaOperacion(allBSign[i])
    })}


let bPunto = document.querySelector(".punto")
bPunto.addEventListener("click", () => {
    if (!numerosEscritos.textContent.includes(".") || permisoBorrado){
        escribirNum(bPunto)
    }})

let bBorrar = document.querySelector(".borrar")
bBorrar.addEventListener("click", () =>{
    numerosEscritos.textContent = '0'
    operacion.signo = undefined;
    operacion.primero = undefined;
})

let bIgual = document.querySelector(".igual")
bIgual.addEventListener("click", () => {
    ejecutaOperacion(bIgual)
    operacion.signo = undefined
    operacion.primero = undefined
})

let bBack = document.querySelector(".back")
bBack.addEventListener("click", () => {
    if (permisoBorrado){
        numerosEscritos.textContent = '0';
        permisoBorrado = false;
    }

    else {
        numerosEscritos.textContent = numerosEscritos.textContent.slice(0, numerosEscritos.textContent.length - 1)
    }

    if (numerosEscritos.textContent === ''){
        numerosEscritos.textContent = 0
    }
} )

