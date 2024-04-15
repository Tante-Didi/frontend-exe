// Basic Understanding 
//1.Variable Assignment and Arithmetic
const a = 8;
const b = 2;
const result = a * b + 3;
console.log(result); // 8 * 2 + 3 =19

//2.order with Variables
const x = 4;
const y = 2;
const z = 3;
const evaluation = x + y * z - 1;
console.log(evaluation); // 4 + 2 * 3 - 1 =9

//.3 Parentheses Impact
const a = 4;
const b = 2;
const result = (a + b) * (b - 1);
console.log(result); //( 4 + 2 ) * ( 2 - 1 ) =6

//4.Expression with Variables
const num = 50;
const x = 5;
const y = 6;
const result = num - x * y;
console.log(result); // 50 - 5 * 6 =20

//5.mixing Operations
const a = 8;
const b = 2;
const c = 4;

const result = (a / b) * c;
console.log(result); //8 / 2 * 4 =16

//6.Predicting results with different Operation Orders
const a = 2;
const b = 3;
const c = 4;

const result = a + b * c and ( a + b ) * c;
console.log(result); // 2 + 3 * 4 = 14  and  ( 2 + 3 ) * 4 =20

//7.Nested Parentheses
const a = 2;
const b = 3;
const c = 5;

const result = (( a + b ) * c ) / 2;
console.log(result); // (( 2 + 3 ) * 5 ) / 2 =12.5

//8.Complex Variable Expression
const a = 3;
const b = 6;
const c = 5;
const d = 4;

const result =  a + b * ( c + d ) / b - d ;
console.log(result); // 3 +6 * (5 + 4 ) /6 - 4 =30

// Intermediate Understanding 

//9.mixing strings and numbers
const num = 2
const str = '3' // 3=Number(str)
const result = num + Number(str) * 4
console.log(result);// 2+3*4=14


//Conversion:If the string (str) contains numeric characters only (including integers, decimals, and scientific notation), Number(str) will convert it to a corresponding numerical value.


//Parsing: If the string contains non-numeric characters or cannot be parsed as a number, Number(str) will return NaN (Not a Number).

// Example: Number("Hello") will result in NaN.
// Example: Number("123abc") will result in NaN.
// Example: Number("") (an empty string) will result in 0.


//10.string and number operations
const a =10
const b =20
const c ="30"  // 30=Number(str)
const result = a + b + Number(str)  and  Number(str) + a + b 
console.log(result);// 10+20+30=60 and 30+10+20 =60

//11. Unary plus with Variables
const numStr = '3' //3=Number(str)
const num = 10
const result = +numstr + num 
console.log(result);// // +3 + 10 =13

//12.Post - increment in Expression
const x =10
const result = x ++ * 2
console.log(x);//10 + 1 * 2 = 12

 //13.division by zero in variable
 const a = 10
 const result = a / 0
console.log(result);// since 10 divided by 0 is mathematically undefined but conceptually treated as infinity in JavaScript.

//14.Modulus Operator with Variables

const a = 5
const b = 4
const result = a % b 
console.log(result); // 5 % 4 --> 1  התשובה : שארית
