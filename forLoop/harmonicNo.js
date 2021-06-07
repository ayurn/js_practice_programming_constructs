// 2. Write a program that takes a command-line argument n and prints the nth harmonic number.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo get nth harmonic number:");
const n = Number(prompt("Enter a positive integer (i.e. 'n' value): "));
if (n >= 1 && Number.isInteger(n)) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += Math.pow(i, -1);
    }
    console.log("The harmonic number is: " + ans);
} else console.log("Enter only positive integers.");
