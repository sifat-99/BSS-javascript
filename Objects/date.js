const now = new Date();
const date1 = new Date('June 6 2026 09:00');
const date2 = new Date(2026, 5, 6, 9);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());

console.log(date1.toDateString());
console.log(date2.toDateString());
