// 1. Character Name Capitalization
function characterNameCapitalize(name) {
  const string = name.split(",");
  for (let i = 0; i < name.length; i++) {
    const capitalize = string.touppercase(name[i][0]);
    capitalize.join(" ");
  }
}

const input = "iron warrior";
characterNameCapitalize(name);
console.log(input);
