let countries = ["India", "Pakistan", "Nepal", "Bangladesh"];
let exists = false;

for (let i = 0; i < countries.length; i++) {
  if (countries[i] == "Ethiopia") {
    console.log("ETHIOPIA");
    exists = true;
    break;
  }
}

if (!exists) {
  countries.push("Ethiopia");
}

console.log(countries);
