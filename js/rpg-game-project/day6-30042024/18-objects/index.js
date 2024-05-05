//.1 add a method that returns sum
console.log("---------------------1------------------------");
const character = {
  name: "Super Mario",
  class: "Kids Game",
  level: 5,
  abilities: ["Super Jump", "Super Mushroom", "Fire Flower", "Bombs"],
  stats: { strength: 10, dexterity: 5, intelligence: 20 },
  getOverallStrength: function () {
    return this.stats.strength + this.stats.dexterity + this.stats.intelligence;
  },
};
console.log(character.getOverallStrength()); //35

//.2 Add New property without modifying the initial declaration
console.log("---------------------2------------------------");
character["equipment"] = {
  weapon: " knife ",
  armor: " armor plate ",
  accessories: [" Jinx Belt ", " Attack Scarf ", " Quartz Charm"],
};
console.log(character.abilities[0]); //Super Jump
console.log(character["abilities"][0]); //Super Jump

console.log(character.equipment.armor); // armor plate
console.log(character["equipment"]["armor"]); // armor plate

//.3 update , add value to the property ,delete class,modify property
console.log("---------------------3------------------------");
console.log("---------------------Update-to level----------------------");
character["level"] = "10";
console.log(character["level"]); //10
console.log(character);
console.log("---------------------add to array-----------------------");

character["abilities"].push("Toxic Mushroom");
console.log(character); /*abilities: [
    'Super Jump',
    'Super Mushroom',
    'Fire Flower',
    'Bombs',
    'Toxic Mushroom'
    */
console.log("---------------------delete-----------------------");
delete character["class"];
console.log(character); // נמחק!!!
console.log("---------------------modify-----------------------");
/* dot notation 
character.equipment.weapon = "gun";
console.log(character.equipment.weapon); //gun
console.log(character.equipment); //weapon: 'gun'
*/

//Bracket Notation
character["equipment"]["weapon"] = "gun";
console.log(character);
console.log("-----------------for---if-----------------------");

if (character.hasOwnProperty("stats")) {
  console.log(character["stats"]);
} else {
  console.log("character['stats'],Does not exist in this object");
}

//.4.1 Log the property health inside the obj inside the array
console.log("---------------------4.1------------------------");
const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];
console.log(characters[0]["attributes"]["health"]);

//.4.2 create function to find the average health property( the is inside the obj inside the main array) of all characters in the array
//
console.log("-----------------4.2-----------------------");

let n = 0;
let sum = 0;
for (key of characters) {
  sum = sum + key["attributes"]["health"];
  n = n + 1;
}
const average = sum / n;
console.log("the average of health of all characters in the array " + average);

//5. merge 2 character Obj into 1 with the Spread Operator (...):can also be used to merge arrays into a new array.

console.log(
  "-------5.1----- merge of 2 existing Objs---Spread Operator-------------"
);

const character1 = {
  name: "Eldrin",
  attributes: { health: 100, mana: 50 },
};

const character2 = {
  name: "Mira",
  attributes: { health: 85, mana: 60 },
};

const mergeCreateNewOBjs = Object.assign(
  {},
  { ...character1 },
  { ...character2 }
);
console.log(mergeCreateNewOBjs); //{ name: 'Eve', health: 1000, mana: 150 }

console.log("-------5.2----- preventing modification--Object.freeze()---");
Object.freeze(mergeCreateNewOBjs); //Object.freeze(name-of-the-obj) method , השמה

mergeCreateNewOBjs["name"] = "Mike"; //אין שינוי שם
mergeCreateNewOBjs["attributes"]["health"] = 150; //healthיש שינוי הערך של  ת
mergeCreateNewOBjs["attributes"]["health"] = {
  subClass1: 80,
  subClass2: 85,
  subClass3: 89,
}; // יש שינוי הערך ממספר לאובייקט
mergeCreateNewOBjs["class"] = { subClass1: 80, subClass2: 85, subClass3: 89 }; //class אין הוספה של  ערך אובייקט
delete mergeCreateNewOBjs["name"]; //name אין מחיקה

console.log(mergeCreateNewOBjs); // { name: 'Mira', attributes: { health: 150, mana: 60 } }  no new modification in a shallow level but yes in the deeper obj when using freeze

console.log("-------5.3----- preventing modification--Object.seal()-");
Object.seal(mergeCreateNewOBjs); //Object.freeze(name-of-the-obj) method , השמה

mergeCreateNewOBjs["name"] = "Doly"; //אין שינוי שם
mergeCreateNewOBjs["attributes"]["health"] = 155550; //healthיש שינוי הערך של  ת
mergeCreateNewOBjs["attributes"]["health"] = {
  subClass11: 99999,
  subClass22: 99999,
  subClass33: 99999,
}; // יש שינוי הערך ממספר לאובייקט
mergeCreateNewOBjs["class"] = {
  subClass11: 111,
  subClass22: 111,
  subClass33: 111,
}; //class אין הוספה של  ערך אובייקט
delete mergeCreateNewOBjs["name"]; //  name  אין מחיקה ל

console.log(mergeCreateNewOBjs);
console.log("-------5.4---Object.isSealed()) -");
console.log(Object.isSealed(mergeCreateNewOBjs)); //true

console.log("-------5.5---Object.isFrozen()-");
console.log(Object.isFrozen(mergeCreateNewOBjs)); //true

//.6 a function --Object.keys(OBJ-name)--- that logs all property names && function  ---Object.values(OBJ-name)--that logs all value in the object
console.log(
  "-----------------------------6-----------------------------------"
);

const characterStats = {
  name: "Eldrin",
  class: "Mage",
  level: 7,
  health: 100,
  mana: 200,
};
const logAllPropAndValue = (characterStats) => {
  const logAllProperty = Object.keys(characterStats);
  console.log(`Keys : ${logAllProperty}`); //[ 'name', 'class', 'level', 'health', 'mana' ]
  const logAllValues = Object.values(characterStats);
  console.log(`Values :'${logAllValues}`); //[ 'Eldrin', 'Mage', 7, 100, 200 ]
};
console.log(characterStats);
//7. a function to increase value number  of a specific property
console.log(
  "-----------------------------7-----------------------------------"
);
const gameScores = {
  Eldrin: 950,
  Mira: 1200,
  Thorn: 800,
};
const increaseExperiencePoints = (gameScoresOBJ) => {
  for (const [characterName, experiencePoints] of Object.entries(
    gameScoresOBJ
  )) {
    if (experiencePoints < 1000) {
      this.experiencePoints += 100;
    }
  }
  return gameScoresOBJ;
};
increaseExperiencePoints(gameScores);
console.log(gameScores);
console.log(
  "-----------------------------8-----------------------------------"
);
//8.
const quests = {
  1: { name: "Find the Lost Sword", difficulty: "Easy", reward: "100 gold" },
  2: { name: "Defeat the Dragon", difficulty: "Hard", reward: "500 gold" },
  3: { name: "Escort the Merchant", difficulty: "Medium", reward: "250 gold" },
};
function name(params) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      object[difficulty] > "Medium";
    }
  }
}
