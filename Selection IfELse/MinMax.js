/**
 * 1. Write a program that reads 5 Random 3 digit values and then Outputs the minimum
 * and the maximum value
 */
 let maxNumber = Math.floor(100 +(Math.random() * 10) % 900);
 let minNumber = maxNumber;
 
 i = 0;
 while( i <= 5){
      randomNumber = Math.floor(100 +(Math.random() * 10) % 900);
     if( maxNumber < randomNumber){
          maxNumber = randomNumber;
     }
     if( minNumber > randomNumber){
          minNumber = randomNumber;
     }
     i++;
 }
 
 console.log("Maximum number "+ maxNumber);
 console.log("Minimum number "+ minNumber);