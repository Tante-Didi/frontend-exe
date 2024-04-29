// 1. Character Name Capitalization
console.log("--------------1-------------");
function characterNameCapitalize(name) {
  let characterNameArray = name.split(" ");
  let newString = "";
  for (let i = 0; i < characterNameArray.length; i++) {
    let capitalize =
      characterNameArray[i].charAt(0).toUpperCase() +
      characterNameArray[i].slice(1).toLowerCase();
    newString = newString + capitalize + " ";
  }
  return "" + newString + "";
}

const input = "iron warrior";
const capitalizedInput = characterNameCapitalize(input);
console.log(capitalizedInput); //Iron Warrior
console.log("--------------2-------------");
// 2. Item Search

// Input: ["Iron Sword", "Healing Potion", "Steel Shield", "Iron Axe"] and query "Iron"
console.log("--------------3-------------");
console.log("--------------4-------------");
console.log("--------------5-------------");
console.log("--------------6-------------");
console.log("--------------7-------------");
console.log("--------------8-------------");
console.log("--------------9-------------");
console.log("--------------1-------------");
