//1.convert number to string    .toString() method
let number = 123;
let numberToString = number.toString();
console.log(`${numberToString}`);
//למה זה לא עובד???? למה זה לא נהפך לסטרינג?????

//2. convert string to a number  parseInt()
let string = "456";
let stringToNumber = parseInt("456");
console.log(stringToNumber);

//3.convert string to float-point number    parseFloat()
string = "78.9";
stringToFloat = parseFloat(string);
console.log(stringToFloat);

//4.combining a number and string
let number1 = 5;
let string1 = "3";
let sum = number1 + string1;
console.log(sum);
