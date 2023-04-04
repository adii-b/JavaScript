let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();

if (day < 10) {
  day = "0" + day;
}

if (month < 10) {
  month = `0${month}`;
}

if (hour < 10) {
  hour = `0${hour}`;
}

if (min < 10) {
  min = `0${min}`;
}

// YYYY-MM-DD
console.log(`${year}-${month}-${day} ${hour}:${min}`);

// DD-MM-YYYY
console.log(`${day}-${month}-${year} ${hour}:${min}`);

// DD/MM/YYYY
console.log(`${day}/${month}/${year} ${hour}:${min}`);
