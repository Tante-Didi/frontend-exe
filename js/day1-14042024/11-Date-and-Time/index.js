//Dates & Times
//1.Display Current Date and Time
const event = new Date();

console.log(event.toString());

const currentDate = new Date();
const utcString = currentDate.toUTCString();

console.log(`${utcString} `);

let month = new Date();

month;
month.setTime(month.getTime() + 50);
console.log(`Month is `, month);

let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 50);

console.log(`today =>`, today.getFullYear());
console.log(`tomorrow => ${tomorrow}`);
