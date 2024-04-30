//1.convert number to string    .toString() method
console.log("---------------1--------------");
let number = 123;
let numberToString = number.toString();
console.log(numberToString);
console.log(typeof numberToString);

//2. convert string to a number
console.log("---------------2--------------");
let string = "456";
let stringToNumber = Number("456");
console.log(stringToNumber);
console.log(typeof stringToNumber);

//3.convert string to float-point number    parseFloat()

/*The parseFloat() function in JavaScript is used to parse a string and convert it into a floating-point number (a number with decimal points). It works by scanning the string from left to right until it encounters a character that cannot be part of a floating-point number, such as a letter or a special character (except for the decimal point "." and the exponent notation "e" or "E").*/
console.log("---------------3--------------");
string = "78.9";
stringToFloat = parseFloat(string);
console.log(stringToFloat);

//4.combining a number and string
console.log("---------------4--------------");
let number1 = 5;
let string1 = "3";
let sum = number1 + string1; // ציין + את פעולת הקונקאטינשיין, number1 = נהפך לסטירנג
console.log(sum);
console.log(typeof sum);

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
const number6 = +string6; //sting6 becomes 24 as a number because he changed from a string to a number due to =+ meaning the + was close on the left from the string
console.log(number6); //24

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
