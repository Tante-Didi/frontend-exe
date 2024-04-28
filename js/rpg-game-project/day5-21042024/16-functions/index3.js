console.log(`-------Pure Function-Answers --6-11------------`);
// 6. Count Battles in XP Range
console.log(`---------6-------------`);
let arrayFunction6 = [50, 75, 100, 30, 20, 100];
function countInXpRange(Array6, lowerBoundRange, upperBoundRange) {
  let battlesCount6 = 0;
  for (let i = 0; i < Array6.length; i++) {
    if (Array6[i] >= lowerBoundRange && Array6[i] <= upperBoundRange) {
      battlesCount6 = battlesCount6 + 1;
    }
  }
  return battlesCount6;
}

let lowerBoundRange = 75;
let upperBoundRange = 100;
let Battles6 = countInXpRange(arrayFunction6, lowerBoundRange, upperBoundRange);
console.log(Battles6); //3

/*--------------------------------7---------------------------------------*/
//7.Find Games Developed by a Specific Developer
console.log(`---------7-------------`);

const gameTitles17 = [
  "The Legend of Zelda",
  "Final Fantasy",
  "Halo: Combat Evolved",
];

const developers17 = ["Nintendo", "Square Enix", "Bungie"];

function findGamesByDeveloper(gameTitles7, developers7, targetDeveloper) {
  const newArray7 = [];

  for (let i = 0; i < developers7.length; i++) {
    if (developers7[i] === targetDeveloper) {
      newArray7.push(gameTitles7[i]);
    }
  }
  return newArray7;
}

console.log(findGamesByDeveloper(gameTitles17, developers17, "Bungie"));

/*----------------------------------8---------------------------------*/
//8. Capitalize the First Letter of Each Game Title
console.log(`-------------8---------`);
const gameTitles18 = [
  "the legend of zelda",
  "final fantasy",
  "halo: combat evolved",
];

function capitalizeFirstLetter(gameTitles8) {
  const newArray8 = [];

  for (let i = 0; i < gameTitles8.length; i++) {
    const elementIndex0 =
      gameTitles8[i].charAt(0).toUpperCase() + gameTitles8[i].slice(1);
    newArray8.push(elementIndex0);
  }
  return newArray8;
}

console.log(capitalizeFirstLetter(gameTitles18)); //[ 'The legend of zelda', 'Final fantasy', 'Halo: combat evolved' ]

/*------------------------------9----------------------------*/
// 9. Filter Unique XP Values
console.log("-----------------9---------------------");

function uniqueXP(parameter) {
  const newArray9 = [];

  for (let i = 0; i < parameter.length; i++) {
    if (!newArray9.includes(parameter[i])) {
      newArray9.push(parameter[i]);
    }
  }

  return newArray9;
}

const numberArray = [100, 50, 75, 50, 100, 75, 100];
const outPut = uniqueXP(numberArray);
console.log(outPut); //[ 100, 50, 75 ]
/*------------------------------10----------------------------*/
console.log("-----------------10---------------------");
//10.Sort Game Titles Alphabetically

function sortTitlesAlphabetically(gamesTitles10) {
  const newArrayGameTitles10 = [...gamesTitles10];
  for (let i = 0; i < gamesTitles10.length; i++) {
    newArrayGameTitles10.sort((a, b) => a.localeCompare(b));
  }
  return newArrayGameTitles10;
}

const input10 = [
  "The Legend of Zelda",
  "Final Fantasy",
  "Halo: Combat Evolved",
];
const output10 = sortTitlesAlphabetically(input10);
console.log(output10); //[ 'Final Fantasy', 'Halo: Combat Evolved', 'The Legend of Zelda' ]

/** [...gamesTitles10] Copying Array Elements: The spread syntax ... is used to create a shallow copy of the gamesTitles10 array.this ensures that the sorting operation performed on newArrayGameTitles10 does not modify the original gamesTitles10 array. It's a common technique used to work with arrays in JavaScript without mutating the original data. */

/**((a, b) => a.localeCompare(b)): This part is a comparison function used by the .sort() method to determine the order of elements. In this case, it's using an arrow function (ES6 syntax) to define the comparison.
(a, b): These are parameters of the arrow function. In the context of sorting, a represents the first element being compared, and b represents the second element being compared.
=>: This is the arrow function syntax, which is a shorthand for writing functions in JavaScript.
a.localeCompare(b): This is the comparison logic. The localeCompare() method is used to compare strings in a locale-sensitive manner. It returns a value that indicates whether the string a comes before, after, or is the same as the string b based on the current locale's sorting rules. */
/*------------------------------11----------------------------*/
console.log("-----------------11---------------------");
// 11. Filter XP by Multiple Criteria

function filterXPByCriteria(xp, greaterThan, lessThan) {
  const newArray = [];

  for (let i = 0; i < xp.length; i++) {
    if (xp[i] > greaterThan && xp[i] < lessThan) {
      newArray.push(xp[i]);
    }
  }
  return newArray;
}
const xpArray = [10, 20, 30, 40, 50];
const finalAnswer = filterXPByCriteria(xpArray, 20, 50);
console.log(finalAnswer); //[ 30, 40 ]
