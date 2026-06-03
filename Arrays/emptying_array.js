let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
numbers = [];
console.log(numbers, another);

// Solution 2
numbers = [1, 2, 3, 4];
another = numbers;
numbers.length = 0;
console.log(numbers, another);

// Solution 3
numbers = [1, 2, 3, 4];
another = numbers;
numbers.splice(0, numbers.length);
console.log(numbers, another);

// Solution 4
numbers = [1, 2, 3, 4];
another = numbers;
while (numbers.length > 0) {
    numbers.pop();
}
console.log(numbers, another);
