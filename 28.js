let num = 3;
let str = "";

// Triangle
for (i = 1; i < num; i++) {
  for (j = 0; j < i; j++) {
    str = str + "*";
    console.log(str);
  }
}
console.log();
console.log();
console.log();

// Square
num = 3;
str = "";

for (i = 1; i <= num; i++) {
  console.log();
  for (j = 1; j <= num; j++) {
    process.stdout.write("*");
  }
}
console.log();
console.log();
console.log();

// Pyramid
num = 3;
str = "";

for (i = 1; i <= num; i++) {
  console.log();
  for (j = num; j >= i; j--) {
    process.stdout.write(" ");
  }
  for (k = 1; k <= i; k++) {
    process.stdout.write(" *");
  }
}
