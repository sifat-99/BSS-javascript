console.log(false || 'Sifat');
console.log(false || 1 || 2);

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

let userColor2 = undefined;
let currentColor2 = userColor2 || defaultColor;
console.log(currentColor2);
