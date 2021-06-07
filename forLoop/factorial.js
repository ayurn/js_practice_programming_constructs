// 5. Write a program that computes factorial of a number taken as input.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo compute factorial of a number:");
const n = Number(prompt("Enter a non-negative integer: "));
if (n >= 0 && Number.isInteger(n)) {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    console.log(n + "! = " + factorial);
} else console.log("Invalid user input.");