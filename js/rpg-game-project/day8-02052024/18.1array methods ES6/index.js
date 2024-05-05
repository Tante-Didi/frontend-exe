//1.Retrieve player Names value using .map()
console.log("----------------------1---------------------------");
const players = [{ name: "Hero" }, { name: "Warrior" }, { name: "Mage" }];

function playersNAme(playersObjsInArray) {
  return playersObjsInArray.map((player) => player.name);
}

const playerNames = playersNAme(players);
console.log(playerNames); //[ 'Hero', 'Warrior', 'Mage' ]

//2.Filter players by Level .filter()
console.log("----------------------2---------------------------");
const playersLevels = [{ level: 1 }, { level: 2 }, { level: 3 }];
let minLevel = 2;

function levelEqualOrMore(theLevelArray) {
  return theLevelArray.filter((player) => player.level >= minLevel);
}
const playersLevel = levelEqualOrMore(playersLevels);
console.log(playersLevel);

//3.calculate Total Health  .reduce()
console.log("----------------------3---------------------------");
const playerObjects = [{ health: 100 }, { health: 120 }, { health: 80 }];

const sum = playerObjects.reduce((acc, curr) => acc + curr.health, 0);
console.log(sum); //300

//.4 combine Names and Levels  .map()
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
console.log(callFunction); //[ 'Hero-Level 1 ', 'Warrior-Level 2 ' ]

//.5 Update Player Health  .forEach()
console.log("----------------------5---------------------------");
const playerObjArray = [
  { name: "Hero", health: 100 },
  { name: "Warrior", health: 120 },
];
const newHealth = 150;
const playerName = "Hero";

function updatePlayerHealth(playersArray, playerName, newHealth) {
  playersArray.forEach((player) => {
    if (player.name === playerName) {
      player.health = newHealth;
    }
  });

  return playersArray;
}

const callFunction5 = updatePlayerHealth(playerObjArray, playerName, newHealth);
console.log(callFunction5); //[ { name: 'Hero', health: 150 }, { name: 'Warrior', health: 120 } ]

//.6 6.Filter Players by Location  .filter()
console.log("----------------------6---------------------------");
const playerObjArray6 = [
  { location: "forest" },
  { location: "mountain" },
  { location: "castle" },
];
const location = "forest";
function filterPlayerLocation(ObjArray) {
  return ObjArray.filter((player) => player.location.startsWith("f"));
}
filterPlayerLocation(playerObjArray6);
console.log(filterPlayerLocation(playerObjArray6)); //[ { location: 'forest' } ]

//7.Get Average Player Level  .reduce()
console.log("----------------------7---------------------------");
const playerObj7 = [{ level: 1 }, { level: 2 }, { level: 3 }];
function sumLevel(objArray) {
  return objArray.reduce((acc, curr) => acc + curr.level, 0);
}
let averagePlayerObj7 = sumLevel(playerObj7) / playerObj7.length;
console.log(averagePlayerObj7); //2
//8. Sort Players by Health     .sort()
console.log("----------------------8---------------------------");
const ObjArray8 = [{ health: 100 }, { health: 120 }, { health: 80 }];
function sortArray(playerArray) {
  return playerArray.sort((a, b) => b.health - a.health);
}
let sortAscendingOrder = sortArray(ObjArray8);
console.log(sortAscendingOrder); //[ { health: 120 }, { health: 100 }, { health: 80 } ]

//9. Retrieve Player Inventories   .map()
console.log("----------------------9---------------------------");
const inventoryArray = [
  { inventory: ["sword", "health potion"] },
  { inventory: ["axe", "shield"] },
];
function mapInventoryPlayer(InventoryArray) {
  return inventoryArray.map((player) => player.inventory);
}
console.log(mapInventoryPlayer(inventoryArray)); //[ [ 'sword', 'health potion' ], [ 'axe', 'shield' ] ]
