let x = 10;
let y = x;
x = 20;

console.log(x, y);

let a = { value: 10 };
let b = a;
a.value = 20;

console.log(a, b);

let number = 10;
function increase(number) {
    number++;
}
increase(number);
console.log(number);

let obj = { value: 10 };
function increaseObj(obj) {
    obj.value++;
}
increaseObj(obj);
console.log(obj.value);
