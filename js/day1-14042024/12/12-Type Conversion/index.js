//1.convert number to string    .toString() method
console.log("---------------1--------------");
let number = 123;
let numberToString = number.toString();
console.log(numberToString);
//למה זה לא עובד???? למה זה לא נהפך לסטרינג?????

//2. convert string to a number
console.log("---------------2--------------");
let string = "456";
let stringToNumber = Number("456");
console.log(stringToNumber);

//3.convert string to float-point number    parseFloat()
console.log("---------------3--------------");
string = "78.9";
stringToFloat = parseFloat(string);
console.log(stringToFloat);

//4.combining a number and string
console.log("---------------4--------------");
let number1 = 5;
let string1 = "3";
let sum = number1 + string1;
console.log(sum);

//5. Number to Boolean Conversion
console.log("---------------5--------------");

const numberZero = 0;
const booleanZero = Boolean(numberZero);
console.log(booleanZero); // false

const numberOne = 1;
const booleanOne = Boolean(numberOne);
console.log(booleanOne); //  true

//6.String to Number with a Unary Operator
console.log("---------------6--------------");
const string6 = "24";
const number6 = +string6;
console.log(number6);

//7. True or False to Number:
console.log("---------------7--------------");
const trueBooleanSeven = true;
const trueNumber = Number(trueBooleanSeven);
console.log(trueNumber); // 1

const falseBooleanSeven = false;
const falseNumber = Number(falseBooleanSeven);
console.log(falseNumber); //  0

//8. Convert null to Number:
console.log("---------------8--------------");
const nullValue = null;
const numberToNull = Number(nullValue);
console.log(numberToNull); // 0
