/*let x = 10
let y = 20
let z = y

y = x
x=z
console.log(x, y)*/

//number 2

// let numbers = [1,2,3,4,5,9]
// let i = 0;
// for(i in numbers){
//     x = numbers[i];
//     Math.max(x)

// }
// console.log(x);


//number 3

// let word = "javascript is 3adeia"
// let vowels = "aeiou"
// let count = 0;

// for (i in word) {
//     if (vowels.includes(word[i].toLowerCase())) {
//         count++;
//     }
// }

// console.log("Number of vowels in the string is: " + count);


//number 4

// let nonPrime = [1,2,3,4,5,6,7,8,9,10,13,15,17]
// let prime = [];

// for(i in nonPrime) {
//     let isPrime = true;
//     let num = nonPrime[i];
    
//     if (num < 2) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j <= Math.sqrt(num); j++) {
//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
    
//     if (isPrime) {
//         prime.push(num);
//     }
// }

// console.log("Prime numbers are: " + prime.join(", "));


//number 5

// let word = "helloo"
// console.log("The word is: " + word.split("").reverse().join(""));


//number 6

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (i in numbers) {
//     if (numbers[i] % 2 === 0) {
//         sum += numbers[i];
//     }
// }
// console.log("The sum of even numbers is: " + sum);


// number 7

// let numbers = [1, 2, 4, 4, 2, 5, 5, 6, 1];
// let unique = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (!unique.includes(numbers[i])) {
//         unique.push(numbers[i]);
//     }
// }

// console.log("The array without duplicates is: " + unique.join(", "));


// number 9

let number = 5
let sum = 1

for (let i = 1; i <= number; i++) {
    sum *= i;
}
console.log("The factorial of " + number + " is: " + sum);


// number 10

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "blue"
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}