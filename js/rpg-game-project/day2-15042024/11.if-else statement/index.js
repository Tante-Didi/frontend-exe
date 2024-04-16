// RPG GAME PROJECT

//1.Player Health Check
let playerHealth = 55;
if (playerHealth > 10) {
  console.log("player is strong");
} else {
  console.log("player is weak");
} // player is strong

//2.Player Gold Range Check
const playerGold = 10;
if (playerGold >= 1 && playerGold <= 100) {
  console.log("Rich Player");
} else {
  console.log("Poor player ");
} // Rich Player --->met 2 true conditions

//3.Nested if-else for Weather and Time
const weather = "rainy day ";
const timeOfDay = " 14:00 ";
if (weather === "sunny" && timeOfDay === "14:00") {
  console.log("continue the adventure");
} else {
  console.log("seek shelter ");
} //seek shelter

//4.comparing weapon Strength
const playerWeapon = "knife";
const enemyWeapon = "M16";
if (playerWeapon === enemyWeapon) {
  console.log("Weapons clashing");
} else {
  console.log("Advantage ");
} //Advantage

//5.check player age for game content
const playerAge = 35;
if (playerAge >= 13 && playerAge <= 19) {
  console.log("player can join & play in the game");
} else {
  console.log("player isn`t applicable to participate in the game");
} //player isn`t applicable to participate in the game

//6.Game Score Evaluation with Ternary operator
const gameScore = 45;
const msg =
  gameScore >= 50
    ? "score is greater than or equal to 50"
    : " score is not  greater than or equal to 50";
console.log(msg); //score is not  greater than or equal to 50

//7.check Number of Enemies (Even or Odd) with Ternary Operator
const numOfEnemies = 1;
const msg1 =
  numOfEnemies % 2 === 0 ? "numOfEnemies is even" : " numOfEnemies is odd";
console.log(msg1); //numOfEnemies is odd

//8.Character Age Group Classification
const characterAge = 30;
const msg2 =
  characterAge <= 12
    ? "Youngling"
    : characterAge >= 13 && characterAge <= 19
    ? "Adolescent"
    : "adult";
console.log(msg2); //adult

//.9 Player`s Battle skill Evaluation:
const battleSkill = 50;
const msg3 = battleSkill > 70 ? "Skilled warrior" : "Train harder";
console.log(msg3); //Train harder

//.10 Game Session Duration Category
const sessionDuration = 151;
if (sessionDuration < 90) {
  console.log("short");
} else if (sessionDuration >= 90 && sessionDuration <= 150) {
  console.log("Moderate");
} else {
  console.log("marathon");
} //marathon

//.11 Check Potion Availability in Inventory
const totalPotions = 13;
const usedPotions = 5;
const AvailablePotions = totalPotions - usedPotions;
if (AvailablePotions >= 1) {
  console.log("Potions Available");
} else {
  console.log("Out of Potions");
} //Potions Available

//12.Validate Player Age for Restricted Quest
const playerAge2 = 18;
const questAgeRestriction = 18;
if (playerAge2 >= questAgeRestriction) {
  console.log("Enjoy the game");
} else {
  console.log(
    "Warning: If you are under 18 years old you can't proceed and participate in the game"
  );
} //Enjoy the game

//13.Special Weekend Events
let dayOfTheWeek = "Monday";

if (dayOfTheWeek === "Sunday" || dayOfTheWeek === "Saturday") {
  console.log("Special event happening!");
} else {
  console.log("Regular Game Play");
} // Regular Game Play

//14.Identify Era of Game Setting:
const gameSettingYear = 1984;
if (gameSettingYear >= 900 && gameSettingYear <= 1500) {
  console.log("medieval era setting");
} else {
  console.log("Different historical era");
} //Different historical era

//15.Evaluate Character class and Attributes
const characterClass = " Fighter ";
const characterLevel = 50;
if (characterClass === " Fighter " && characterLevel >= 10) {
  console.log("Powerful Fighter");
} else {
  console.log("Average character");
} //Powerful Fighter

//16.Determine Battle Readiness
playerHealth = 200;
const enemyCount = 500;
if (playerHealth >= 50 && enemyCount <= 3) {
  console.log("Ready for battle");
} else {
  console.log("Proceed with caution");
} //Proceed with caution

//17.Assess Quest Completion Status:
const questProgress = 100;
const questDifficulty = 3;
if (questProgress === 100 && questDifficulty <= 5) {
  console.log("Quest complete");
} else {
  console.log("Quest is in progress");
} //Quest complete

//18.check Player`s Inventory
const inventorySize = 90;
if (inventorySize >= 90) {
  console.log("Inventory almost full");
} else {
  console.log("plenty of space in the inventory");
} //Inventory almost full
