const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toPrecision());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));



// ==================== Maths =======================

// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4,7));
// console.log(Math.ceil(12,85));
// console.log(Math.floor(21,54));
// console.log(Math.max(32,21));
// console.log(Math.min(98,34));

console.log(Math.random()); // Always gives number between 0 and 1
console.log(Math.random()*10+1);
console.log(Math.floor(Math.random()*10+1));

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min);










