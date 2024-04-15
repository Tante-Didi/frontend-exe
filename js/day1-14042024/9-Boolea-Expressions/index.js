// 1.true or false
const isSunny = true;
const isWeekend = false;
console.log(isSunny && isWeekend); //false

//2.checking conditions
const age = 25;
const license = true;
if (age > 18 && license === true) {
  console.log("the person is over 18 and has a driving license");
} //the person is over 18 and has a driving license אם 2 התנאים אמת, אז המשפט הזה יודפס

//3.either or scenario
const knowJAVAScript = false;
const knowPython = true;

if (knowJAVAScript === true || knowPython === true) {
  console.log("this person knows JS or Python");
}
//this person knows JS or Python

//סתם שיחקתי עם זה והרחבתי את השאלה
// const knowJAVAScript = false;
// const knowPython = false;

// if (knowJAVAScript === true && knowPython === true) {
//   console.log("this person knows JS or Python ");
// } else if (knowJAVAScript === true) {
//   console.log("this person knows JS");
// } else if (knowPython === true) {
//   console.log("this person knows  Python ");
// } else {
//   console.log("this person doesn't knows JS or Python ");
// }
//this person doesn't knows JS or Python

//4.Negating a Boolean
const isRaining = true;
console.log(!isRaining); //false =NOT TRUE

//5.complex logical expression
const isLikeMusic = true;
const isPlayGuitar = false;
const isHasTime = true;
if ((isLikeMusic === true && isPlayGuitar === true) || isHasTime === true) {
  console.log(
    "this person like music and either plays guitar or has time to learn "
  );
} //  אמנם המשתנים של "אנד" לא מציגים מצב אמת שניהם בו זמנית ולכן פה ההתניה היתה מסתיימת אבל האו
//כן אמת ולכן מקיים את ההתניה

//6. Age Comparison
const personAge = 16;
if (personAge > 18) {
  console.log("this person`s age is greater than 18 ");
} // no message in the console -- the condition was not met !!!

//7.Temperature Check
const currentTemperature = 19;
if (currentTemperature < 20 || currentTemperature > 30) {
  console.log("currentTemperature is less then 20 or greater than 30 ");
} //currentTemperature is less then 20 or greater than 30

//8.Equality Check
const firstNumber = 10;
const secondNumber = "10";
if (firstNumber === secondNumber) {
  console.log("the same value and the same type");
} else if (firstNumber == secondNumber) {
  console.log("the same value");
}

//9.Budget Limit
let budget = 1000;
let expense = 2000;
if (expense < budget || expense === budget) {
  console.log("expense is less than the budget or equal ");
} //  המשתנים אינם מקיימים את התנאי לכן אין שום הודעה בקונסול

//10.Height Comparison
let person1Height = 150;
let person2Height = 150;
if (person1Height > person2Height) {
  console.log("person1Height is greater than person2Height");
} else if (person1Height < person2Height) {
  console.log("person1Height is less than person2Height");
} else if (person1Height === person2Height) {
  console.log("person1Height is equal than person2Height");
}
