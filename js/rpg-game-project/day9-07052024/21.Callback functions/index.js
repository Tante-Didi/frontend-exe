console.log("--------------------------1------------------------------");
//Exercise 1:

function processEnemies(enemies, callback) {
  if (!Array.isArray(enemies)) {
    throw new Error("Expected an array of enemies");
  }
  //clone the enemies array to prevent mutating the original
  const newEnemies = JSON.parse(JSON.stringify(enemies));

  //use map to process each enemy with the callback
  return newEnemies.map((enemy, index) => {
    //verify the enemy structure
    if (enemy.hasOwnProperty("name") && enemy.hasOwnProperty("health")) {
      return callback(enemy);
    } else {
      throw new Error("Enemy at index ${index} is not in the right structure");
    }
  });
}
const enemies = [
  {
    id: 1,
    name: "Superman",
    health: 110,
  },
  {
    id: 2,
    name: "spideman",
    health: 80,
  },
  {
    id: 3,
    name: "Super-Mario",
    health: 65,
  },
];
const newEnemies = processEnemies(enemies, (enemy) => (enemy.health += 10));
console.log(newEnemies);

console.log("--------------------------2------------------------------");
//Exercise 2:
function processQuests(quest, callback) {
  if (!Array.isArray(quests)) {
    throw new Error("Expected an array of Quests");
  }
  //clone the enemies array to prevent mutating the original
  const newEnemies = JSON.parse(JSON.stringify(quests));

  //use map to process each enemy with the callback
  return newEnemies.map((quest, index) => {
    //verify the enemy structure
    if (enemy.hasOwnProperty("name") && quest.hasOwnProperty("health")) {
      return callback(quest);
    } else {
      throw new Error(`quest at index ${index} is not in the right structure`);
    }
  });
}
const quests = [
  {
    id: 5,
    name: "Quest name 1",
    health: 110,
  },
  {
    id: 6,
    name: "Quest name 2",
    health: 80,
  },
  {
    id: 7,
    name: "Quest name 3",
    health: 65,
  },
];
const newEnemies = processEnemies(enemies, (enemy) => (enemy.health += 10));
console.log(newEnemies);
console.log("--------------------------3------------------------------");
