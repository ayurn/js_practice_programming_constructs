// 3. Extend the flip-coin problem till either heads or tails wins 11 times.
const prompt = require('prompt-sync')({ sigint: true });

let heads = 0, tails = 0, toss;
console.log("\nSimulating coin-flip:");
while (heads < 11 && tails < 11) {
    toss = Math.floor(Math.random() * 10) % 2;
    if (toss == 0) ++heads;
    else ++tails;
    console.log(`Heads: ${heads}  Tails: ${tails}`);
}
if (heads == 11) console.log("Heads wins!");
else console.log("Tails wins!");
