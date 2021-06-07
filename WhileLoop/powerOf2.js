// 1. Write a program that takes a command-line argument N and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is  reached.
const prompt = require('prompt-sync')({ sigint: true });

console.log("Powers of 2 less than or equal to 2^n or till 256 are:");
const n1 = Number(prompt("Enter a non-negative integer (i.e. 'n' value): "));
if (n1 >= 0 && Number.isInteger(n1)) {
    let i = -1, ans = 0;
    while (++i <= n1 && ans < 256) {
        ans = Math.pow(2, i);
        console.log("2^" + i + " = " + ans);
    }
} else console.log("Enter only non-negative integers.");