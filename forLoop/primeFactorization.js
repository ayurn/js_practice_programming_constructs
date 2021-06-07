// 6. Write a program to compute factors of a number N using prime factorization method.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo find the factors of a number(n) using prime factorization:");
let n = Number(prompt("Enter a positive integer (i.e. 'n' value): "));
if (n >= 1 && Number.isInteger(n)) {
    console.log("Factors of " + n + " are:");
    for (let i = 1; i * i <= n; i++)
        if (n % i == 0) {
            console.log(i);
            if (n / i != i)    // prime-factorization
                console.log(n / i);
        }
} else console.log("Invalid user input.");