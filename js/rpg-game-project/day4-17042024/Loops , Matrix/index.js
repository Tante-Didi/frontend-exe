//1. Calculate Total Player Experience
const experiencePoints1 = [100, 150, 75];
let arraySum = 0;
for (let i = 0; i < experiencePoints1.length; i++) {
  arraySum = arraySum + experiencePoints1[i];
}
console.log(`${arraySum} is the sum of all completed quests`); //325 is the sum of all completed quests

//2. Locate Quest by Title
const questTitles2 = ["Quest 1", "Quest 2", "Quest 3"];
const findQuest2 = "Quest 2";
console.log(questTitles2.indexOf(findQuest2)); //1

// 3. List Enemies Above Health Threshold
const enemyHealths3 = [80, 120, 65];

let over100 = 0;

for (let i = 0; i < enemyHealths3.length; i++) {
  if (enemyHealths3[i] > 100) {
    console.log(enemyHealths3[i]);
  }
} //120

//4. Enhance All Quest Rewards
const questRewards4 = [50, 100, 75];

for (let i = 0; i < questRewards4.length; i++) {
  questRewards4[i] = questRewards4[i] + 20;
}
console.log(questRewards4); //[ 70, 120, 95 ]

// 5. Count Occurrences of a Specific Reward
const questRewards5 = [50, 100, 75, 100];
const specificReward5 = 100;
let numberTimesSpecificReward = 0;

for (let i = 0; i < questRewards5.length; i++) {
  if (questRewards5[i] == specificReward5) {
    numberTimesSpecificReward = numberTimesSpecificReward + 1;
  }
}
console.log(numberTimesSpecificReward); //2

// 6. Verify All Quests Offer Sufficient Challenge
const questChallenges6 = [120, 150, 75];
const challengeThreshold = 100;

for (let i = 0; i < questChallenges6.length; i++) {
  if (questChallenges6[i] > challengeThreshold) {
    console.log(`True - Quest Challenges are above Threshold`);
  } else {
    console.log(`false - Quest Challenges are not above Threshold `);
  }
} //True - Quest Challenges are above Threshold,True - Quest Challenges are above Threshold,false - Quest Challenges are not above Threshold

// 7. Discover the Quest with the Maximum Reward
const questRewards7 = [50, 100, 75, 150];
const maxHeight = 0;
for (let i = 0; i < questRewards7.length; i++) {
  const element = questRewards7[i];
}

// // 8. Combine Enemy Powers for a Total Assault Value
const enemyPowers8 = [50, 80, 65, 90];
const enemyHealths8 = [80, 120, 60, 100];

const enemyTotal = enemyPowers8.concat(enemyHealths8);
let sumTotal = 0;

for (let i = 0; i < enemyTotal.length; i++) {
  sumTotal += enemyTotal[i];
}
console.log(sumTotal);
