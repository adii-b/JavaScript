let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages = ages.sort();
console.log(ages[0]); // min
console.log(ages[ages.length - 1]); // max
console.log(ages[ages.length - 1] - ages[0]); // Range

// Median
ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let median = 0;
if (ages.length % 2 == 0) {
  median = (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2;
} else {
  median = ages[Math.floor(ages.length / 2)];
}
console.log(median);

// Average age
let sumOfElements = 0;
for (let i = 0; i < ages.length; i++) {
  sumOfElements += ages[i];
}
console.log(sumOfElements / ages.length);

let a = Math.abs(ages[0] - sumOfElements / ages.length); // min - avg
let b = Math.abs(ages[ages.length - 1] - sumOfElements / ages.length); // max - avg
console.log(a == b);
