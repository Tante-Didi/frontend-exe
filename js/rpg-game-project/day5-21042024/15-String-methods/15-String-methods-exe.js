// 1. Character Name Capitalization
function capitalizeCharacterName(name) {
  let capitalized = "";

  for (let i = 0; i < name.length; i++) {
    // Capitalize the first letter of the first word
    if (i === 0 || (i > 0 && name[i - 1] === " ")) {
      capitalized += name[i].toUpperCase();
    } else {
      capitalized += name[i];
    }
  }

  return capitalized;
}

// Example usage:
const inputName = "iron warrior";
const capitalizedOutput = capitalizeCharacterName(inputName);
console.log(capitalizedOutput); // Output: "Iron Warrior"

//2.
