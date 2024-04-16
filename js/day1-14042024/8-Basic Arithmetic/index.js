//1. adding two numbers
let num1 = 8;
let num2 = 15;
let sum = num1 + num2;
console.log(sum); //23

//2.Subtracting numbers
let a = 30;
let b = 12;
let Subtracting = a - b;
console.log(Subtracting); //18

//3.multiplaying Numbers
let x = 7;
let y = 3;
let multiplaying = x * y;
console.log(multiplaying); //21

//4.Dividing and finding the remainder
let dividend = 20;
let divisor = 4;
let Dividing = dividend / divisor;
console.log(Dividing);

//5.Average of three numbers
let number1 = 15;
let number2 = 25;
let number3 = 10;
let Average = (number1 + number2 + number3) / 3;
console.log(Average.toFixed(2)); //16.66

//6.module שארית operator basics
number1 = 20;
number2 = 3;
let modulo = 20 % 3;
console.log(modulo); //מציג לי אך ורק את שארית 2
//7.even or odd detector
number1 = 20;
if (number1 % 2 === 0) {
  console.log("this number ${number1} is ever");
} else {
  console.log("this number is odd");
}
//8.Divisibility Check
number1 = 31;
if (number1 % 5 === 0 && number1 % 7 === 0) {
  console.log("this number is divisible by both 5 and 7");
} else {
  console.log("this number is not divisible by both 5 and 7");
}
//9.counting by steps
for (let index = 1; index <= 20 /* or you can write also < 21 */; index++) {
  if (index % 4 === 0) {
    console.log(index);
  }
}
//10.Logical AND Operator
number1 = 20;
if (number1 > 10 && number1 < 20) {
  console.log("the number satisfies");
} else {
  console.log("the number is not satisfies");
}
//second way
//for (let index = 1; index < 20 ; index++) {
//     if (index > 10 && index < 20 ) {
//     console.log(index);
//   }
// }

//11.Logical or Operator
number1 = 20;
if (number1 < -5 || number1 > 10) {
  console.log("the number satisfies");
} else {
  console.log("the number is not satisfies");
}

//12.Logical Not Operator
let isThisANumber = true; //הערך שלו אמת
if (isThisANumber == false) {
  console.log("this is true");
}
git;
// if (isThisANumber) {
//   console.log("this is true");
// }

//13.combining Logical Operators
number1 = 25;
if ((number1 > 5 && number1 < 10) || (number1 > 20 && number1 < 30)) {
  console.log("the number satisfies any of the conditions ");
}
