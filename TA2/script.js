/* Parte 1: Suma de Rangos */
const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const sumar = document.getElementById('boton');
const resultado = document.getElementById('resultado');

const sumAll = (num1, num2) => {
    let suma = 0;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
        suma += i;
    }
    resultado.innerText = suma;
    /* Si alguno de los 2 no es un numero, devulve error */
    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerText = "Error, Se debe ingresar un número válido";
    return suma;  
    }
}
sumar.addEventListener('click', () => sumAll(numero1.value, numero2.value));

/* Parte 2: Conversión de Temperatura */
const celsius = document.getElementById('Celsius'); 
const fahrenheit = document.getElementById('Fahrenheit');
const convertir1 = document.getElementById('boton1');
const convertir2 = document.getElementById('boton2');
const resultadocelcius = document.getElementById('resultadocelsius');
const resultadofahrenheit = document.getElementById('resultadofahrenheit');

const convertToFahrenheit = (temp) => {
    let fahrenheit = (temp * 9/5) + 32;
    return fahrenheit.toFixed(1);
}

const convertToCelsius = (temp) => {
    let celsius = (temp - 32) * 5/9;
    return celsius.toFixed(1);
}

convertir1.addEventListener('click', () => {
    resultadocelcius.innerText = convertToFahrenheit(celsius.value);
});

convertir2.addEventListener('click', () => {
    resultadofahrenheit.innerText = convertToCelsius(fahrenheit.value);
});


/* Parte 3: Determinación de Año Bisiesto */
const año = document.getElementById('año');
const determinar = document.getElementById('boton3');
const bisiesto = document.getElementById('bisiesto');

const leapYears = (año) => {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

determinar.addEventListener('click', () => {
    if (leapYears(año.value)) {
        bisiesto.innerText = "True";
    } else {
        bisiesto.innerText = "False";
    }
});


/* Parte 4: Suma de Elementos de un Arreglo */
const sumarArreglo = document.getElementById('boton4');
const resultadosuma = document.getElementById('resultadosuma');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30];
const mostrararray = document.getElementById('array');

const sumArray = (arr) => {
    let suma = 0;
    array.forEach(element => {
        suma += element;
    });
    return suma;
}

mostrararray.innerText = array;

sumarArreglo.addEventListener('click', () => {
    resultadosuma.innerText = sumArray(array);
});


