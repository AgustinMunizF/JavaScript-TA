/* Parte 1: Generación de Contraseñas */
const generar = document.getElementById('boton');
const contraseña = document.getElementById('password');
longitud = 8

const generatePassword = (longitud) => {
    const caracteres = '!@#$%^&*()_+[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    const simbolos = '!@#$%^&*()_+[]{}|;:,.<>?';
    const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';

    let password = '';

    for (let i = 0; i < longitud; i++) {
        
        // Esto asegura que la contraseña contenga al menos una mayúscula, una minúscula, un número y un símbolo 
        if (i === 0) {
            const caracter_random = mayusculas.charAt(Math.floor(mayusculas.length * Math.random()));
            password += caracter_random;
        } else if (i === 1) {
            const caracter_random = minusculas.charAt(Math.floor(minusculas.length * Math.random()));
            password += caracter_random;
        } else if (i === 2) {
            const caracter_random = numeros.charAt(Math.floor(numeros.length * Math.random()));
            password += caracter_random;
        } else if (i === 3) {
            const caracter_random = simbolos.charAt(Math.floor(simbolos.length * Math.random()));
            password += caracter_random;

        // Cuando ya tenemos al menos un caracter de cada tipo, agrega caracteres aleatorios
        } else {
            const caracter_random = caracteres.charAt(Math.floor(caracteres.length * Math.random()));
            password += caracter_random;
        }     
    }
    return password;
    }

generar.addEventListener('click', () => {
    contraseña.innerText = generatePassword(longitud);
});


/* Parte 2: . Búsqueda del Más Viejo: */
const mostrararray = document.getElementById('mostrar');
const boton = document.getElementById('boton1');
const resultado = document.getElementById('resultado');

const people = [
    {nombre: 'Juan', edad: 15}, 
    {nombre: 'Marcos', edad: 18},
    {nombre: 'Miguelito', edad: 9},
    {nombre: 'Luis', edad: 24},
    {nombre: 'Pipo', edad: 65},
    {nombre: 'Maria', edad: 21},
    {nombre: 'Daniel', edad: 40},
    {nombre: 'Sofia', edad: 25},
    {nombre: 'Joaquin', edad: 19},
];

const findTheOldest = (people) => {
    let oldest = people[0]; 
    people.forEach(person => {
        if (person.edad > oldest.edad) {
            oldest = person;
        }        
    });
    return oldest;
}

// Mostrar nombres de las personas
const nombresarray = people.map(person => person.nombre)

mostrararray.innerText = nombresarray

boton.addEventListener('click', () => {
    resultado.innerText = "La persona más vieja es: " + findTheOldest(people).nombre + " con " + findTheOldest(people).edad + " años";
});

