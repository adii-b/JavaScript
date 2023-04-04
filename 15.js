let grade = 69;

if (grade >= 80 && grade <= 100) {
  console.log(`A grade`);
} else if (grade >= 70 && grade <= 79) {
  console.log(`B grade`);
} else if (grade >= 60 && grade <= 69) {
  console.log(`C grade`);
} else if (grade >= 50 && grade <= 59) {
  console.log(`D grade`);
} else if (grade > 0 && grade <= 49) {
  console.log(`F grade`);
} else {
  console.log(`Please enter valid grade`);
}
