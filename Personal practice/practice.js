/*
🧠 PRACTICE EXERCISES:
1. Basics: Declare a variable `username`, a constant `birthYear`, and a boolean `isCoding`.
2. Operators: Perform arithmetic calculations, assignment combinations, relational comparison, strict equality, logical verification, and ternary assignments.
3. Control Flow: Construct if...else structures checking times of day, and a standard loop iterating multiple times.
4. Objects: Implement object literals, factory functions, constructor functions, dynamic properties, and spread-based cloning.
5. Arrays: Practice adding elements, searching indices, filtering by criteria, mapping formats, and summing with reduce.
6. Functions: Implement function declarations vs expressions, hoisting behaviors, rest parameters, getters/setters with error validation, and try...catch blocks.
*/

// Basics (Variables & Primitive Types)
let username = 'Sifat';
const birthYear = 2000;
let isCoding = true;

// Operators (Arithmetic, Assignment, Comparison, Equality, Logical, Ternary)
let a = 15;
let b = 4;
let arithmeticResult = (a + b) * (a - b);
a += 5;
let isGreater = a > b;
let isStrictlyEqual = a === 20;
let logicalCheck = isCoding && isGreater;
let tier = a > 10 ? 'Premium' : 'Standard';

// Control Flow (conditionals, loops)
let hour = 14;
if (hour < 12) {
    console.log('Good Morning');
} else if (hour < 18) {
    console.log('Good Afternoon');
} else {
    console.log('Good Evening');
}

for (let i = 1; i <= 3; i++) {
    console.log('Loop iteration:', i);
}

// Objects (creation, factory, constructor, cloning, methods)
function createHero(name, power) {
    return {
        name,
        power,
        usePower() {
            return `${this.name} uses ${this.power}!`;
        }
    };
}

const hero1 = createHero('Batman', 'intellect');
const heroClone = { ...hero1 };

function Car(make, model) {
    this.make = make;
    this.model = model;
}
const myCar = new Car('Toyota', 'Corolla');

// Arrays (adding, finding, filtering, mapping, reducing)
const scores = [80, 95, 60, 70];
scores.push(85);
const highScores = scores.filter(score => score > 75);
const formattedScores = highScores.map(score => `Score: ${score}`);
const sumOfScores = scores.reduce((total, current) => total + current, 0);

// Functions (declarations, expressions, rest parameter, getters/setters, try...catch)
const mathUtils = {
    get doubleA() {
        return a * 2;
    },
    set doubleA(val) {
        if (typeof val !== 'number') {
            throw new Error('Must be a number');
        }
        a = val / 2;
    }
};

function processNumbers(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

try {
    mathUtils.doubleA = 'invalid';
} catch (e) {
    console.log('Error caught:', e.message);
}

console.log('Arithmetic Result:', arithmeticResult);
console.log('Is Strictly Equal:', isStrictlyEqual);
console.log('Hero Clone:', heroClone);
console.log('Formatted Scores:', formattedScores);
// console.log('Processed Sum:', processNumbers(1, 2, 3, 4));
