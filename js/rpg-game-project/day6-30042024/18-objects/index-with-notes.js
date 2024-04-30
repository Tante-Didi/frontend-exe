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
5.1;
