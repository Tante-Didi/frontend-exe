//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before the code is executed.
// However, the important point to note is that only the declarations are hoisted, not the initializations

/*1.Basic Understanding of Hoisting

Given this code, try to think what will be the outputs.
Sample Code:*/
console.log("----------var-------------");
console.log(a);
// What will be the output? undefined
/*When it comes to var , JavaScript will automatically initialize it to undefined during the hoisting phase.*/

var a = 5;
console.log("-----------let-----------");

console.log(b);
// What will be the output?  ReferenceError
//Cannot access 'b' before initialization
let b = 5;
console.log("-----------const------------");
console.log(c);

// What will be the output?  ReferenceError
//Cannot access 'c' before initialization
const c = 5;
/*For let and const, they are hoisted, but not initialized. Therefore, if you try to access them before declaration,you'll encounter a ReferenceError. This period from hoisting to declaration/initialization is known as the TemporalDead Zone (TDZ).*/

//2.Understanding Function Hoisting

/*Given those two functions, one with a function declaration and another one with a function-expression, if we try to call both functions before they are defined, what would be the outputs?
Sample Code:*/
console.log(myFuncDecl());
// What will be the output? it will work , because even if you can call the function before you declare function declaration,it is hoisted to the top of the scope and it will work
function myFuncDecl() {
  return;
  ("Hello from function declaration!");
}
console.log("---------------------------");
console.log(myFuncExpr());
// What will be the output? it will encounter an TypeError because you can not call a function expression before declare it
var myFuncExpr = function () {
  return;
  ("Hello from function expression!");
};

//3.Nested Scopes and Hoisting
/*Given this program with a function inside another function, write what do you think would be the output in each console statement.*/
const x = "global";
function outerFunc() {
  let y = "outer";
  function innerFunc() {
    var z = "inner";
    console.log(x);
    // What will be the output?"global"
    console.log(y);
    // What will be the output?"outer"
  }
  innerFunc();
  console.log(z);
  // What will be the output? error because the function declaration is in the inner scope and the call does not have an access to it from the global.
}
outerFunc();

//.4.Combining All Concepts Given this code,
//what would be the output of the console statements and the function calls?
//Sample Code:
const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    console.log(a);
    // What will be the output?//10
  }
}
b();
console.log(a);
// What will be the output of a?//1
foo();
function foo() {
  console.log(x);
  // What will be the output?//undefined,as var is a global scope variable
  var x = "Hello, world!";
  bar();
  function bar() {
    console.log(x);
    // What will be the output?//ReferenceError:Cannot access 'x' before initialization
    let x = "Hello, scope!";
  }
}
