function Circle(radius) {
    this.radius = radius;
}

const circle = new Circle(1);
console.log(circle.constructor);

let x = {};
console.log(x.constructor);
