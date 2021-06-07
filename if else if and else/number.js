// 3. Read a number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter a number of this form 1, 10, 100, 1000, etc:");
const number = Number(prompt("number: "));
let numValue;
if (number == 1) numValue = "Unit";
else if (number == 10) numValue = "Ten";
else if (number == 100) numValue = "Hundred";
else if (number == 1000) numValue = "Thousand";
else if (number == 10000) numValue = "Ten Thousand";
else if (number == 100000) numValue = "Lakh";
else if (number == 1000000) numValue = "Ten Lakh";
else if (number == 10000000) numValue = "Crore";
else if (number == 100000000) numValue = "Ten Crore";
else if (number == 1000000000) numValue = "Hundred Crore";
else console.log("Invalid user input.");
console.log("Your entered number is: " + numValue);