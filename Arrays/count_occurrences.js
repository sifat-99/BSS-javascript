function countOccurrences(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

const numbers = [1, 2, 3, 4, 2, 2];
const count = countOccurrences(numbers, 2);
console.log(count);
