const ages = [6, 12, 90, 18, 24];

console.log(ages);

console.log(ages[0]);
console.log(ages[1]);
console.log(ages[ages.length - 1]);

const compareNumbers = (a, b) => a - b;

const organized = ages.sort(compareNumbers);

console.log(ages);

const names = ["jojo", "pedro", "lucas", "arthur"];

console.log(names.sort());