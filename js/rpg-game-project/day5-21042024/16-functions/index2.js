console.log(`-------Pure Function-Answers --1-5------------`);
//1.Determine the Average Rating of Games
console.log(`---------1-------------`);

const arrayRatingGames = [8.5, 7.9, 6.3, 9.2, 8.1];

function calculateAverageRating(ratingArray) {
  let sum = 0;
  for (let i = 0; i < ratingArray.length; i++) {
    sum = sum + arrayRatingGames[i];
  }
  return (sum / ratingArray.length).toFixed(1);
}

console.log(calculateAverageRating(arrayRatingGames)); //8.0
/*----------------------------------------------2------------------------------------------------*/
//02.Extract Developer Names from Game Titles
console.log(`---------2-------------`);

function extractDeveloperNames(gameTitles) {
  const arrayOfGameTitles = [];
  const developedByString = "Developed by";

  //go in -through each game title
  for (let i = 0; i < gameTitles.length; i++) {
    const elementInTheArray = gameTitles[i];

    //to find the first time index of `developed by` is present
    const findIndexOfDevelopedByString =
      elementInTheArray.indexOf(developedByString);

    //if the index string "developed by" is found , then extract with slice after the 12 character from, this index and slice it to a new array =developer name
    if (findIndexOfDevelopedByString !== -1 /* הכוונה- אם נמצאה המילה*/) {
      const developerName = elementInTheArray
        .slice(findIndexOfDevelopedByString + developedByString.length)
        .trim();
      arrayOfGameTitles.push(developerName);
    }
  }
  return arrayOfGameTitles;
}
const gameTitlesArray = [
  "The Legend of Zelda: Breath of the Wild (2017) - Developed by Nintendo",
  "Final Fantasy VII (1997) - Developed by Square Enix",
  "Halo: Combat Evolved (2001) - Developed by Bungie",
];
console.log(extractDeveloperNames(gameTitlesArray)); //[ 'Nintendo', 'Square Enix', 'Bungie' ]

/*---------------------------------------------3----------------------------------------------*/
// 3. Check if a Game Title Contains a Specific Word
console.log(`---------3-------------`);
const containsWordInTitleArray = [`final Fantasy VII`, `Fantasy`];

function containsWordInTitle(gameTitle, keyWord) {
  for (let i = 0; i < containsWordInTitleArray.length; i++) {
    // gameTitle = containsWordInTitleArray[0];
    if (gameTitle.includes(keyWord)) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}
containsWordInTitle(`final Fantasy VII`, `Fantasy`); //true
containsWordInTitle(`The Legend of Zelda`, `Fantasy`); //false
containsWordInTitle(`final Fantasy VII`, `Halo`); //false

// Input: ('Final Fantasy VII', 'Fantasy')
//אני רוצה שיצא לי
//TRUE FALSE FALSE
/*------------------------------------------------4--------------------------------------------*/
//4. Check if All Game Titles Start with the Same Letter
console.log(`------------4----------`);

const containGameTitleArray = [
  "assAssin`s Creed",
  "Age of Empires",
  "Animal Crossing",
];

function allTitlesStartWithSameLetter(gameTitle) {
  // Iterate through each title in the array
  let isSameCapitalLetter = true;
  for (let i = 0; i < gameTitle.length; i++) {
    // Check if the first character of the title is  'A'

    if (!gameTitle[i][0].includes("A")) {
      isSameCapitalLetter = false;
    }
  }
  return isSameCapitalLetter;
}
console.log(allTitlesStartWithSameLetter(containGameTitleArray));

allTitlesStartWithSameLetter(containGameTitleArray); // false because of assAssin`s Creed

/*-----------------------------------------------5----------------------------------------*/
// 5. Concatenate All Game Genres into a Single String
console.log(`------------5----------`);

const gameGenresArray = ["RPG", "Action", "Adventure"];
function concatenateGenres(arrayexample) {
  //Initialize an empty string to store concatenated genres
  let result = "";
  for (let i = 0; i < arrayexample.length; i++) {
    //Concatenate each genre to the result string
    result = result + arrayexample[i];
    if (i !== arrayexample.length - 1) {
      result = result + ", "; // Add comma and space after each genre except the last one
    }
  }

  return result; // Return the concatenated string
}

return console.log(concatenateGenres(gameGenresArray)); // RPG, Action, Adventure
