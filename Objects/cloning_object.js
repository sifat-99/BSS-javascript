const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {};
for (let key in circle) {
    another[key] = circle[key];
}
console.log(another);

const another2 = Object.assign({}, circle);
console.log(another2);

const another3 = { ...circle };
console.log(another3);
