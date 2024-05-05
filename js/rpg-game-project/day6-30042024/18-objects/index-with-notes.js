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
// "equipment"= property
//שגם הוא אובייקט
//בתוך האובייקט של
//character (line4)

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
console.log("------------3.1-------Update-----------------------");
//3.1Update
character["level"] = "10";
console.log(character["level"]); //10
console.log(character);
// אותה תשובה בסגנון הכתיבה השני dot.notation  character.level = "10"; console.log(character.level);

//--------------------------------------------------------------------------------------------------------------
console.log("-----------3.2--------add to array-----------------------");
//3.2 add to array value in object property
character["abilities"].push("Toxic Mushroom");
console.log(character); /*abilities: [
    'Super Jump',
    'Super Mushroom',
    'Fire Flower',
    'Bombs',
    'Toxic Mushroom'
    */
// לא לשכוח שמדובר במערך ולא אובייקט !
//בתוך "הפוש" אנחנו שמים את הערך(האלמנט) שנרצה להוסיף לפרופרטי

//---------------------------------------------------------------------------------------------------------------
console.log("------------3.3-------delete-----------------------");
//3.3 delete the class property
delete character["class"];
console.log(character); // נמחק!!!! הללוליה
//---------------------------------------------------------------------------------------------------------------
console.log("------------3.4---------modify-----------------------");
//3.4 modify
/* dot notation 
character.equipment.weapon = "gun";
console.log(character.equipment.weapon); //gun
console.log(character.equipment); //weapon: 'gun'
*/

//Bracket Notation
character["equipment"]["weapon"] = "gun";
console.log(character);
console.log("---------------------if-----------------------");

if (character.hasOwnProperty("stats")) {
  console.log(character["stats"]);
} else {
  console.log("character['stats'],Does not exist in this object");
} // { strength: 10, dexterity: 5, intelligence: 20 }

//The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it).

//.4.1 Log the property health inside the obj inside the array
console.log("---------------------4.1------------------------");

const characters = [
  { name: "Eldrin", attributes: { health: 100, mana: 50 } },
  { name: "Mira", attributes: { health: 85, mana: 60 } },
];
console.log(characters[0]["attributes"]["health"]); //100 -הערך של בריאות בשורה 86

//.4.2 בהמשך לתרגיל 4.1 -- להשתמש בנתונים משם
//create function to find the average health property( the is inside the obj inside the main array) of all characters in the array

console.log(
  "----------calculate average in OBJ-----------4.2-----------------------"
);

let n = 0;
let sum = 0;
for (key of characters) {
  sum = sum + key["attributes"]["health"];
  n = n + 1;
}
const average = sum / n;
console.log("the average of health of all characters in the array " + average); //92.5

//5.
console.log("---------------------5-----------------------");
//5. merge 2 character Obj into 1 with the Spread Operator (...):can also be used to merge arrays into a new array.
//const mergeCharactersArray = [...characters[0],...characters[1]]
//console.log(mergeCharactersArray

//"-------5-----create new obj results from  merge of 2 existing Objs-----"

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
Object.freeze(mergeCreateNewOBjs); //Object.freeze(name-of-the-obj) method , השמה.....................//.deepFreeze()שיטה שנשתמש במידה ונרצה להקפיא גם את הצאצאים של האובייקטים
//FREEZE היא עוצרת שינויים ,הוספה ומחיקה ברמה השטחית
mergeCreateNewOBjs["name"] = "Mike";
mergeCreateNewOBjs["attributes"]["health"] = 150;

// mergeCreateNewOBjs["attributes"]["name"]["kids-health"] = 150;

console.log(mergeCreateNewOBjs); //{ name: 'Mira', attributes: { health: 150, mana: 60 } }  no new modification in a shallow level but no in the deeper

console.log("-------5.3----- preventing modification--Object.seal()-");

//Object.seal() new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable.
//השיטה חוסמת הוספה חדשה,הסרה של תוכן קיים,לא ניתן לשנות ספירה שלה ולא ניתן להשים מחדש את הפרוטוטייפ
//כן אפשר-ערכים לפרופורטיס קיימים כן ניתן לשנות

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
const logAllProperty = Object.keys(characterStats);
console.log(logAllProperty); //[ 'name', 'class', 'level', 'health', 'mana' ]
const logAllValues = Object.values(characterStats);
console.log(logAllValues); //[ 'Eldrin', 'Mage', 7, 100, 200 ]
