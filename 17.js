let month = "june";
month = month.toLowerCase();

if (
  month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
  console.log("This month has 31 days");
} else if (month == "february") {
  console.log("This month has 28 days");
} else {
  console.log("This month has 30 days");
}
