// 3. Read a number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nEnter a number of this form 1, 10, 100, 1000, etc:");
const number = Number(prompt("number: "));
let numValue;
switch (number) {
    case 1: numValue = "Unit"; break;
    case 10: numValue = "Ten"; break;
    case 100: numValue = "Hundred"; break;
    case 1000: numValue = "Thousand"; break;
    case 10000: numValue = "Ten Thousand"; break;
    case 100000: numValue = "Lakh"; break;
    case 1000000: numValue = "Ten Lakh"; break;
    case 10000000: numValue = "Crore"; break;
    case 100000000: numValue = "Ten Crore"; break;
    case 1000000000: numValue = "Hundred Crore"; break;
    default: console.log("Invalid user input.");
}
console.log("Your entered number is: " + numValue);