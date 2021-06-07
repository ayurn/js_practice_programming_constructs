// 3. Write a program that takes a input and determines if the number is a prime.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo determine if the number is a prime or not:");
const n = Number(prompt("Enter a positive integer: "));
if (n >= 1 && Number.isInteger(n)) {
    let isPrime = true;
    if (n == 1) isPrime = false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(n + " is a prime number.");
    else console.log(n + " is a non-prime number.");
} else console.log("Enter only positive integers.");