//Scope and Hoisting Quiz
console.log(
  "--------------------------------------------------1---------------------------------------------------------"
);
/*1.Question:
Which of the following correctly describes the difference between var,let,and const ?
answer: (b)
var declarations are hoisted and initialized as undefined.let and const declarations are hoisted but not initialized.*/
console.log(
  "--------------------------------------------------2---------------------------------------------------------"
);
/*2.Question:What will be the output of the following code snippet?*/
//the answer: d)ReferenceError (Cannot access 'x' before initialization)
console.log(x);
let x = 5;
console.log(
  "--------------------------------------------------3---------------------------------------------------------"
);
/*3.If a variable declared with let or const is hoisted, why can't we use it before the declaration?
answer :a) Because it’s still in the “temporal dead zone”.*/
console.log(
  "--------------------------------------------------4---------------------------------------------------------"
);
/*4.What will be the output of the following code snippet?*/

let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

/*answer (b) first 2 and then 1 ,the variable x declared inside takes precedence over the variable x declared outside the block within the block's scope.*/

console.log(
  "--------------------------------------------------5---------------------------------------------------------"
);
/*5.What will be the output of the following code snippet?*/
const x = 1;
function example() {
  console.log(x);
  const x = 2;
}
example();
//answer: (d)
//ReferenceError: Cannot access 'x' before initialization

console.log(
  "--------------------------------------------------6---------------------------------------------------------"
);
/*6. What will be the output of the following code snippet?*/
let a = "global";
function checkScope() {
  let a = "local";
  function nested() {
    let a = "nested";
    function superNested() {
      a = "superNested";
      return;
      a;
    }
    return;
    superNested();
  }
  return;
  nested();
}
console.log(checkScope()); //superNested קדימות הסוגריים ושירשור התשובה במעלה הזרם
console.log(a); //global
//answer (A)
console.log(
  "--------------------------------------------------7---------------------------------------------------------"
);
/*7.Which of the following statements about let and const are true?
answer:(d) all the above and 
I elaborate the explanation with Chat GPT for my won 
a)Variables declared with let and const are block-scoped, meaning they are only accessible within the block in which they are defined.
b) Variables declared with let can be updated (i.e., their value can be changed) but not re-declared within the same block scope. However, they can be re-declared in different block scopes.
c) Variables declared with const must be initialized (assigned a value) during declaration. Once initialized, the value of a const variable cannot be changed.