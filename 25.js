let weight = 54; // in kgs
let height = 1.6; // in meters
let age = 20;

function BMI(weight, height) {
  let bmi = weight / height ** 2;
  return bmi;
}

if (age >= 20) {
  let bmi = BMI(weight, height);
  bmi = Math.round(bmi * 10) / 10;
  console.log(`BMI : ${bmi}`);
  if (bmi < 18.5) {
    console.log(`Underweight`);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Normal Weight`);
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(`Overweight`);
  } else {
    console.log(`Obese`);
  }
} else {
  console.log(`You must be atleast 20 years old for accurate results`);
}
