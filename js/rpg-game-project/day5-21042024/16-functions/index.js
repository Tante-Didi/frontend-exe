console.log(`-------imPure Function-Answers --1-7------------`);
//1.initialize Character Stats
console.log(`---------1-------------`);
let characterStatsArray;

function initializeCharacterStats() {
  characterStatsArray = [];
}
//2.add Character Stats
console.log(`---------2-------------`);

function addCharacterStats(characterName, characterStrength) {
  characterStatsArray.push([characterName, characterStrength]);
}

initializeCharacterStats();
addCharacterStats("Moshe", 100);
addCharacterStats("dani", 350);
addCharacterStats("Haim", 200);
console.log(characterStatsArray); //[ [ 'Moshe', 100 ], [ 'dani', 350 ], [ 'Haim', 200 ] ]
//3. find Character Strength
console.log(`---------3-------------`);
function findCharacterStrength(characterName) {
  for (let i = 0; i < characterStatsArray.length; i++) {
    if (characterStatsArray[i][0] === characterName) {
      return characterStatsArray[i][1];
    }
  }
  console.log(`character ${characterName}not found.`);
}
console.log(findCharacterStrength("Haim")); //200

//4.update Character Strength
console.log(`---------4-------------`);
function updateCharacterStrength(characterName, newStrength) {
  // find character by name
  for (let i = 0; i < characterStatsArray.length; i++) {
    if (characterStatsArray[i][0] === characterName) {
      // once i found him, update strength
      characterStatsArray[i][1] === newStrength;
      characterStatsArray.splice([i], 1, [characterName, newStrength]);

      return [characterName, newStrength];
    }
  }
  // if not found, print message
  console.log(`character ${characterName} was not found.`);
}
console.log(characterStatsArray); //[ [ 'Moshe', 100 ], [ 'dani', 350 ], [ 'Haim', 200 ] ]
updateCharacterStrength("Haim", 150); //   'Haim', 150 --> we call/Invoke the function

console.log(characterStatsArray); //[[ 'Moshe', 100 ], [ 'dani', 350 ], [ 'Haim', 150 ]]

//5.Remove Character Stat

console.log(`---------5-------------`);
function removeCharacterStat(characterName) {
  //find character by name
  for (let i = 0; i < characterStatsArray.length; i++) {
    const characterArray = characterStatsArray[i];

    if (characterArray[0] === characterName) {
      // once i found him, remove character from the array
      characterStatsArray.splice(i, 1);
      return;
    }
  }
  console.log(`the current Character is not found `);
}
// console.log(characterStatsArray);
removeCharacterStat(`dani`);
console.log(characterStatsArray); //[ [ 'Moshe', 100 ], [ 'Haim', 150 ] ]

//6.List all Characters and Strengths
console.log(`---------6-------------`);

function listCharacters() {
  for (let i = 0; i < characterStatsArray.length; i++)
    console.log(`"${characterStatsArray[i][0]}-${characterStatsArray[i][1]}"`);
}
listCharacters(); //"Moshe-100"
//"Haim-150"

// 7.Find Strongest Character
console.log(`---------7-------------`);
function strongestCharacter() {
  if (characterStatsArray === undefined || characterStatsArray.length === 0) {
    console.log("Array is empty");
    return;
  }
  let highestStrength = 0;
  let strongestName = "";
  for (let i = 0; i < characterStatsArray.length; i++) {
    const characterArray = characterStatsArray[i];
    if (characterArray[1] > highestStrength) {
      highestStrength = characterArray[1];
      strongestName = characterArray[0];
    }
  }
  console.log(strongestName);
}
strongestCharacter(); //Haim
console.log(characterStatsArray); //[ 'Moshe', 100 ], [ 'Haim', 150 ] ]
