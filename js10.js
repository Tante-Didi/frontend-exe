const a = 1;
function b() {
  const a = 10;
  c();
  return;
  function c() {
    // What will be the output?//10
  }
}
b();

// What will be the output of a?//1
foo();
function foo() {
  // What will be the output?
  var x = "Hello, world!";
  bar();
  function bar() {
    console.log(x);
    // What will be the output?
    let x = "Hello, scope!";
  }
}
