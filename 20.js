let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
let meatExists = false;
let sugarExists = false;

for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Meat") {
    meatExists = true;
    break;
  }
}

for (let i = 0; i < shoppingCart.length; i++) {
  if (shoppingCart[i] == "Sugar") {
    sugarExists = true;
    break;
  }
}

if (!meatExists) {
  shoppingCart.unshift("Meat");
}

if (!sugarExists) {
  shoppingCart.push("Sugar");
}

shoppingCart.splice(4, 4); // Removing Honey
shoppingCart[3] = "Green Tea"; // Modifying tea to green tea

console.log(shoppingCart);
