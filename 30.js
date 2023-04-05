let num1 = 2;
let num2 = 3;
let operation = "+";

switch (operation) {
  case "+":
    console.log("Sum is", num1 + num2);
    break;
  case "-":
    console.log("Difference is", num1 - num2);
    break;
  case "*":
    console.log("Product is", num1 * num2);
    break;
  case "/":
    console.log("Quotient is", num1 / num2);
    break;
  default:
    console.log("Invalid operator");
    break;
}
