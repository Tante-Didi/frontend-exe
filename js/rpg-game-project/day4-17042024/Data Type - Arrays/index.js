//RPG GAME ARRAY MANIPULATION

//1.Check if a weapon Exists
const weaponInventory = ["Sword", "Bow", "Magic Staff"];
const weaponToCheck = "Sword";
console.log(weaponInventory.includes(weaponToCheck)); //true

//2.Revers Quest Order
const questNames = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
console.log(questNames.reverse()); //[ 'Rescue the Princess', 'The Lost Artifact', "Dragon's Lair" ]

//3.	Create a String of Monster Types:
const monsterType = ["Dragon", "Goblin", "Orc"];
console.log(monsterType.join()); //Dragon,Goblin,Orc

//4.	Check for a Specific Monster Type:
const monsterType2 = ["Dragon", "Goblin", "Orc"];
const monsterToCheck = "Orc";
console.log(monsterType2.includes(monsterToCheck)); //true

//5. Find Index of a Specific Quest:
const questNames2 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const SpecificQuest = "Rescue the Princess";

if (questNames2.indexOf(SpecificQuest) !== -1) {
  console.log(
    `Rescue the princess found at index ${questNames2.indexOf(SpecificQuest)}`
  );
} else {
  console.log(`Quest not found`);
} //Rescue the princess found at index 2

// 6. Remove the Last Monster
const monsterList6 = ["Dragon", "Orc", "Goblin"];
console.log(monsterList6.pop());
console.log(monsterList6); //Goblin

// 7. Insert a Monster at the Beginning
const monsterList7 = ["Orc", "Goblin"];
const newMonster7 = "Dragon";
const addingNewMonster7 = monsterList7.unshift(newMonster7);
console.log(addingNewMonster7); //[ 'Dragon', 'Orc' ]
3;

// 8. Remove First Monster and Log It
const monsterList8 = ["Dragon", "Orc", "Goblin"];
const removeFirstMonster = monsterList8.shift();

console.log(removeFirstMonster); //Dragon
console.log(monsterList8); //[ 'Orc', 'Goblin' ]

// 9. Concatenate Two Arrays of Heroes
const heroList1_9 = ["Archer", "Mage"];
const heroList2_9 = ["Warrior", "Healer"];
const newArray = heroList1_9.concat(heroList2_9); //ליצור מערך חדש
console.log(newArray); //[ 'Archer', 'Mage', 'Warrior', 'Healer' ]

// 10. Sort Quests Alphabetically
const questNames10 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
questNames10.sort(); //לסדר לפי סדר אלפבתי
console.log(questNames10); //[ "Dragon's Lair", 'Rescue the Princess', 'The Lost Artifact' ]

// 11. Create Array from Magic Spells
const spellsString11 = "Fireball,Heal,Ice Lance";
console.log(spellsString11.split(",")); //[ 'Fireball', 'Heal', 'Ice Lance' ]

// 12. Slice Array to Get Upcoming Quests
const questNames12 = [
  "Dragon's Lair",
  "The Lost Artifact",
  "Rescue the Princess",
];
const n12 = 2;
const newArray12 = questNames12.slice(0, n12);
console.log(newArray12); //[ "Dragon's Lair", 'The Lost Artifact' ]

// 13. Empty the Monster Array
const monsterList13 = ["Dragon", "Orc", "Goblin"];
monsterList13.splice([]);
console.log(monsterList13); //[]

// 14. Equip a New Weapon
const inventory14 = ["Sword", "Shield"];
const newWeapon14 = "Bow";
const addBow = inventory14.push(newWeapon14);
console.log(inventory14); //[ 'Sword', 'Shield', 'Bow' ]

// 15. Sell the Last Item
const inventory15 = ["Gold", "Magic Potion", "Shield"];
const lastItem = inventory15.pop(); //"Shield"
console.log(`the ${lastItem} is the last item that was sold `); //the Shield is the last item that was sold

// 16. Insert a New Quest at the Beginning
const quests16 = ["Dragon's Lair", "Rescue the Princess"];
const newQuest16 = "Defeat the Goblin King";
const newArray16 = quests16.unshift(newQuest16);

console.log(quests16); //[ 'Defeat the Goblin King', "Dragon's Lair", 'Rescue the Princess' ]

// 17. List All Quests Alphabetically
const quests17 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
console.log(quests17.sort()); //[ 'Defeat the Goblin King', "Dragon's Lair", 'Rescue the Princess' ]

// 18. Check If Quest Exists
const quests18 = [
  "Dragon's Lair",
  "Rescue the Princess",
  "Defeat the Goblin King",
];
const questToCheck18 = "Rescue the Princess";
const indQuestToCheck18 = quests18.indexOf(questToCheck18);
if (indQuestToCheck18 !== -1) {
  console.log("cool you are in the Quest");
} else {
  console.log("you are not in the quest");
}

// 19. Sort Scores
const scores19 = [30, 80, 60, 90];

const descendingOrder = scores19.sort(function (a, b) {
  return b - a;
});
console.log(descendingOrder); //[ 90, 80, 60, 30 ]
