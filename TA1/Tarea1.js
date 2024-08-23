/* Parte 1: Manipulacion de cadenas */

function repeatString(texto, repeticiones) {
    let resultado = texto.repeat(repeticiones);
    console.log(resultado);
    return resultado;
}

function reverseString(texto) {
    let resultado = texto.split('').reverse().join('');
    console.log(resultado);
    return resultado;
}

function ejecutar() {
    let texto = " BuenasTardes";
    let repeticiones = 20;

    let repetido = repeatString(texto, repeticiones);
    document.getElementById("resultadoRepetido").innerText = repetido;

    let invertido = reverseString(texto);
    document.getElementById("resultadoInvertido").innerText = invertido;
}

/* Parte 2:Procesamiento de arreglos */

function removeFromArray(arreglo, item) {
    let resultado = arreglo.filter(elemento => elemento !== item);
    console.log(resultado);
    return resultado;
}

function getTheTitles(books) {
    let resultado = books.map(libro => libro.title);
    console.log(resultado);
    return resultado;
}

function ejecutar2() {
    let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let item = 5;

    let resultado = removeFromArray(arreglo, item);
    document.getElementById("resultadoRemovido").innerText = resultado;

    let libros = [
        { title: 'Libro1', author: 'Autor1' },
        { title: 'Libro2', author: 'Autor2' },
        { title: 'Libro3', author: 'Autor3' },
        { title: 'Libro4', author: 'Autor4' },
        { title: 'Libro5', author: 'Autor5' }
    ];

    let resultado2 = getTheTitles(libros);
    document.getElementById("resultadoLibros").innerText = resultado2;
}

/* Parte 3: Filtrado y Tranformación*/

function getOdds(nums) {
    let resultado = nums.filter(numero => numero % 2 !== 0);
    console.log(resultado);
    return resultado;
}

function duplicates(nums) {
    let resultado = nums.filter((numero, index) => nums.indexOf(numero) !== index);
    console.log(resultado);
    return resultado;
}

function ejecutar3() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let resultado = getOdds(numeros);
    document.getElementById("resultadoImpares").innerText = resultado;

    let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

    let resultado2 = duplicates(numeros2);
    document.getElementById("resultadoDuplicados").innerText = resultado2;
}