// Sum of Resistors in Series
 

// Calculate the sum of all resistors connected in series.
// Examples:
// - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
// - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
// - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)

// Note: This approach uses the absolute value of each resistance to ensure all values are positive.



// console.log(numbers.length);

// NOTAS:
// Se debe crear un acumulador que en este caso será sumResistence
// for tiene 3 condicionales o paramentros incio/condicional/num de pasos que va a dar 
// Inicio: count = 0 (se le puede dar el valor que queramos dependiendo del valor de donde querramos empezar)
// Condicional: se hace una comparación del tamaño del arreglo, por ello se cuenta cuántos elementos hay en un array
// Num de pasos que va a dar: count++ = incremente; count-- = decremento estos dos elementos son iguales a index + 1 y index - 1 respectivamente 
// También los incrementos se puoeden hacer de la siguiente manera: 
// count += 5
// count /= 3
// count *= 6

// NOTAS DE FORMULA:
// 1. Inicialización let count = 0
// 2. Realiza la comparación count < numbers.length
// 3. Ejecuta el contenido 
// 4. Incremento o decremento count++

let sumResitance= 0, numbers = [4, 9, 11, -9];

for (let count = 0; count < numbers.length; count++){
    // Contenido
    let sumResitence = numbers[count]
    if(sumResitence < 0){
        sumResitence = sumResitence * -1;
    }
    sumResitance += numbers[count];
} 

console.log(sumResitance);

// Number divided into halves
 

// Given a number, return the number divided into its halves in an array.
 

// Examples:
// - `numDiv(4)` should return `[2, 2]`.
// - `numDiv(10)` should return `[5, 5]`.
 
const numDiv = number => {
const array = [];
    const half = number / 2;
    array.push(half); // array[0] = half
    array.push(half); // array[1] = half

    return array;
};

console.log(numDiv(4));
console.log(numDiv(8));

// Secret Society

// Find the name of a secret society based on the first letter of each member's name.
 
// Examples:
// - `secretName(["Esperanza", "Franco", "Nia"])` should return `'EFN'`.
// - `secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])` should return `'CJMPRR'`.
// - `secretName(['Harry', 'Ron', 'Hermione'])` should return `'HHR'`.
 
const secretName = members => {
    let societyCapitals = [];  // Aquí almaceno las primeras letras de cada palabra
    let society = "";   // Formar la palabra final

    // Paso 1. Recuperar la primera letra y guardar en el arreglo temporal
    for (let index = 0; index < members.length; index++) {
        const member = members[index];
        societyCapitals.push(member[0]);
    }

    // societyCapitals = ['E', 'F', 'N'];
    // 4, 2, 8, 2 -> 2, 2, 4, 8
    // Paso 2. Ordenar el arreglo temporal
    societyCapitals.sort();  // Ordenamiento

    // Paso 3. Formar el String final
    for (let index = 0; index < societyCapitals.length; index++) {
        society = society + societyCapitals[index];
    }
    return society;
}

console.log(secretName(["Mauricio", "Pablo", "Elizabeth"]));
console.log(secretName(["Paula", "Horacio", "Ana"]));


// Online status
 

// Display online status for a list of users.
 

// Example:
// - `onlineStatus(['mockIng99', 'J0eyPunch', 'glassedFer'])` should return `'mockIng99, J0eyPunch and 1 more online'`.
 

// Array of Multiples
 

// Create a function that takes two parameters (number, length) and returns an array of length containing multiples of the number.
 

// Examples:
// - `arrayMultiplos(2, 10)` should return `[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]`.
// - `arrayMultiplos(17, 6)` should return `[17, 34, 51, 68, 85, 102]`.
 

// Positive dominance in Array
 

// Write a function to determine if an array is positively dominant.
// An array is positively dominant when the majority of its elements are positive.
 

// Example:
// - `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.
 

// Antipodal Average
 

// Given an array, return a shorter array following these steps:
// - Split the array into two equal parts*. If unequal, remove the middle element to obtain two equal arrays.
// - Sum each number of the first part with the inverse numbers of the second part.
// - Divide each number of the resulting array by 2.
 

// Example:
// - For the array `[1,2,3,5,22,6]`, the result should be `[3.5, 12, 4]`.