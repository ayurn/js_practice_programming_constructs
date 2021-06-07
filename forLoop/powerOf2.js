// 1. Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
const prompt = require('prompt-sync')({ sigint: true });

console.log("Powers of 2 less than or equal to 2^n are:");
const n1 = Number(prompt("Enter a non-negative integer (i.e. 'n' value): "));

if (n1 >= 0 && Number.isInteger(n1)) {
    for (let i = 0; i <= n1; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
} else console.log("Enter only non-negative integers.");