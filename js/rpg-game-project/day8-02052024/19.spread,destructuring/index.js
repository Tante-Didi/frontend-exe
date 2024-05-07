//1.Extract Hero Stat        destructing obj
console.log("---------------------1---------------------");
const heroData = {
  heroName: "Aragorn",
  heroLevel: 20,
  heroClass: "Ranger",
  race: "Human",
};
const { heroName, heroLevel, heroClass } = heroData;
console.log(heroName, heroLevel, heroClass); //Aragorn 20 Ranger
// לסדר יש חשיבות!!!

//2.Swap top two Heroes     destructing array & ...rest
console.log("---------------------2---------------------");
let topHeroNames = ["Gandalf", "Legolas", "Frodo", "Samwise"];
let [first, second, ...rest] = topHeroNames;
topHeroNames = [second, first, ...rest];
console.log(topHeroNames); //[ 'Legolas', 'Gandalf', 'Frodo', 'Samwise' ]

//3.Update Hero Level
console.log("---------------------3---------------------");
function updateObj3(heroLevels, heroUpdates) {
  return { ...heroLevels, ...heroUpdates };
}
const heroLevels3 = {
  Aragorn: 20,
  Legolas: 19,
};
const levelUpdates3 = {
  Aragorn: 21,
  Legolas: 20,
};
const updateObj = updateObj3(heroLevels3, levelUpdates3);
console.log(updateObj); //{ Aragorn: 21, Legolas: 20 }
//  מתרחש over write
// של UPDATE
//כי לסדר יש חשיבות ויש להם את אותו הפרופרטי

//.4 Combine Hero Quests without duplicates ..................using the new Set + spread Operators
//הניו סט כבר דואג שכל מה שחוזר על עצמו לא יופיע באראיי החדש
console.log("---------------------4---------------------");
const questList1 = ["Find the ring", "Save the king", "Protect the realm"];
const questList2 = ["Destroy the ring", "Find the lost city", "Save the king"];

const combineHeroQuests = [...new Set([...questList1, ...questList2])];

console.log(combineHeroQuests); /*[
  'Find the ring',
  'Save the king',
  'Protect the realm',
  'Destroy the ring',
  'Find the lost city'
]*/

//5.Extracting Values from Nested Hero Objects  nested properties -destructing
console.log("---------------------5---------------------");
const heroInfo = {
  name: "Legolas",
  equipment: {
    first5: "Bow of the Galadhrim",
    second5: "Elven dagger",
    third: "Cloak of Lothlórien",
  },
};
const {
  equipment: { first5, second5 },
} = heroInfo;
console.log(first5 + ", " + second5); // Bow of the Galadhrim, Elven dagger

//.6 Merge Hero Objects  ...Spread
console.log("---------------------6---------------------");
const baseDetails6 = {
  name: "Gandalf",
  class: "Wizard",
};

const extraDetails6 = {
  level: 25,
  power: 100,
};

const merge = { ...baseDetails6, ...extraDetails6 };
console.log(merge); //{ name: 'Gandalf', class: 'Wizard', level: 25, power: 100 }

//.7 Expand Hero Skill
console.log("---------------------7---------------------");
const heroStats = {
  name: "Legolas",
  level: 20,
  skills: ["Archery", "Sneaking", "Hand-to-hand combat"],
};

function expandHeroSkills(skills) {
  const skill = ["jumping like a maniac"];
  return { ...skillFirst, ...skillSecond, ...skillThired, ...skillFour };
}
console.log({
  ...skillFirst,
  ...skillsecond,
  ...skillThired,
  ...skill,
});
