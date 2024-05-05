//1.Retrieve player Names value using .map()
console.log("----------------------1---------------------------");
const players = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

function playersNAme(playersObjsInArray) {
  return playersObjsInArray.map((player) => player.name);
}

const playerNames = playersNAme(players);
console.log(playerNames); //[ 'Hero', 'Warrior', 'Mage' ]

//2.Filter players by Level
console.log("----------------------2---------------------------");
const playersLevels = [{ level: 1 }, { level: 2 }, { level: 3 }];
let minLevel = 2;

function levelEqualOrMore(theLevelArray) {
  return theLevelArray.filter((player) => player.level >= minLevel);
}
const playersLevel = levelEqualOrMore(playersLevels);
console.log(playersLevel);

//3.calculate Total Health
console.log("----------------------3---------------------------");
const playerObjects = [{ health: 100 }, { health: 120 }, { health: 80 }];

const sum = playerObjects.reduce((acc, curr) => acc + curr.health, 0);
console.log(sum); //300

//.4 combine Names and Levels
console.log("----------------------4---------------------------");
const playersObjArray = [
  { name: "Hero", level: 1 },
  { name: "Warrior", level: 2 },
];
function concatNameAndLevel(arrayWithObj) {
  return arrayWithObj.map(
    (objSpaceHolder) => `${objSpaceHolder.name}-Level ${objSpaceHolder.level} `
  );
}
const callFunction = concatNameAndLevel(playersObjArray);
console.log(callFunction);

//.5 Update Player Health
console.log("----------------------5---------------------------");
const playerObjArray = [
  { name: "Hero", health: 100 },
  { name: "Warrior", health: 120 },
];
const newHealth = 150;
const playerName = "Hero";

function updateHealthPlayerHero(objInsideTheArray) {
  return objInsideTheArray.filter(
    (objSpaceHolder5) => ())
  );
}
const callFunction5 = updateHealthPlayerHero(playerObjArray);
console.log(callFunction5);
