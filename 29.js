let file = "29.js";

function fileExtension(fileName) {
  fileName = fileName.split(".");
  console.log(fileName[1]);
}

fileExtension(file);
