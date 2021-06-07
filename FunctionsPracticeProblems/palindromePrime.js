// 3. Take a number from user and check if the number is a prime then show that its palindrome is also prime. 
// 3.a. Write function check if number is prime.  
// 3.b. Write function to get the palindrome.
// 3.c. Check if the palindrome number is also prime.
const prompt = require('prompt-sync')({ sigint: true });

console.log("\nTo check if a number is prime and it's palindrome is also prime:");
let number = Number(prompt("Enter a number: "));

function isPrime(num) {
    if (Number.isInteger(num) && num >= 1) {
        if (num == 1) return false;
        for (let i = 2; i <= num / 2; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    } else console.log("Input is not a positive integer.");
}

function getPalindrome(num) {
    let ans = 0;
    while (num > 0) {
        ans = ans * 10 + num % 10;
        num = parseInt(num / 10);
    }
    return ans;
}

if (isPrime(number)) console.log("It's a prime number.");
else console.log("It's not a prime number.");

let palNumber = getPalindrome(number);
console.log("Its palindrome is " + palNumber);

if (isPrime(palNumber)) console.log("Its palindrome is a prime number.");
else console.log("Its palindrome is not a prime number.");