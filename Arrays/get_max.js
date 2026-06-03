function getMax(array) {
    if (array.length === 0) return undefined;

    return array.reduce((max, current) => (current > max) ? current : max);
}

const numbers = [1, 2, 3, 4];
const max = getMax(numbers);
console.log(max);
