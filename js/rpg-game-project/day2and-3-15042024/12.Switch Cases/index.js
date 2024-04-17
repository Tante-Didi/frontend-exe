// switch cases for RPG Project
//דגשים, חשוב מאוד ----לשים לב טוב טוב כשעובדים עם סטרינג לוודא שאין רווחים
//כי הם גם נספרים כתוים ואז זה נקרא כערך שונה עבור המחשב שהוא משווה CASES
//1.Quest days of the week
const dayOfWeek = 5;
switch (dayOfWeek) {
  case 1:
    console.log("sunday is a fun day");
    break;
  case 2:
    console.log("monday is a manic Monday");
    break;
  case 3:
    console.log("tuesday a nap day");
    break;
  case 4:
    console.log("wednesday a movie day");
    break;
  case 5:
    console.log("Thursday smells the beginning of the weekend");
    break;
  case 6:
    console.log("friday in the top");
    break;
  case 7:
    console.log("saturday in the shop");
    break;
  default:
    console.log("this case isn`t available");
    break;
} //Thursday smells the beginning of the weekend

//2.Game theme color setting
const theColor = "dungeon";
switch (theColor) {
  case "light":
    console.log("light theme color RPG game user interface");
    break;

  case "dark":
    console.log("dark theme color RPG game user interface");
    break;

  case "dungeon":
    console.log("dungeon theme color RPG game user interface");
    break;

  default:
    console.log("there isn`t a theme color RPG game user interface");
    break;
} //dungeon theme color RPG game user interface

//3. Quest Notification Status:
const questStatus = "wow";
switch (questStatus) {
  case "new":
    console.log("You have a new quests awaiting!");
    break;
  case "unread":
    console.log("You have a new quests awaiting!");
    break;
  case "unopened":
    console.log("You have a new quests awaiting!");
    break;

  case "completed":
  default:
    console.log("completed");
    break;
} //You have an unopened quests awaiting!

//4.Player Level Classification
const playerLevel = "Expert";
switch (playerLevel) {
  case "Beginner":
    console.log(
      "has just started learning to do something and cannot do it very well yet"
    );
    break;
  case "Intermediate":
    console.log(
      "one has moved beyond the basics and is making progress towards mastering"
    );
    break;
  case "Advanced":
    console.log("a high degree of proficiency or expertise");
    break;
  case "Expert":
    console.log("a level of almost mastery that few achieve");
    break;
  case "Master":
    console.log("the one and the only");
    break;

  default:
    console.log("you are not playing at all");
    break;
} //a level of almost mastery that few achieve

//5.Inventory Item Selection
const inventoryItem = "Shield";
switch (inventoryItem) {
  case "Potion":
    console.log(`there is ${inventoryItem} left in the inventory`);
  case "Sword":
    console.log(`there is ${inventoryItem} left in the inventory`);
  case "Shield":
    console.log(`there is ${inventoryItem} left in the inventory`);
    break;
  default:
    console.log(`Invalid item selected.`);
    break;
}

//6.Player Score Ranges:
const playerScore = 85;
switch (true) {
  case playerScore >= 90:
    console.log("Legend");
    break;
  case playerScore >= 70 && playerScore <= 89:
    console.log("Champion");
    break;
  case playerScore < 70:
  default:
    console.log("Rookie");
    break;
}

//7.Seasonal Quests:
const questsMonth = 6;
switch (questsMonth) {
  case 1:
    console.log("Ice Kingdom Adventure");
    break;
  case 2:
    console.log("Valentine`s Day Special");
    break;
  case 3:
    console.log("Spring Blossom Hunt");
    break;
  case 4:
    console.log("Easter Egg Hunt");
    break;
  case 5:
    console.log("Flower Festival celebration");
    break;
  case 6:
    console.log("Summer Solstice Quest");
    break;
  case 7:
    console.log("Beach Party Bonanza");
    break;
  case 8:
    console.log("Underwater Expedition");
    break;
  case 9:
    console.log("Harvest Festival Quest");
    break;
  case 10:
    console.log("Haunted Mansion Mystery");
    break;
  case 11:
    console.log("Turkey trot Adventure");
    break;
  case 12:
    console.log("Frosty Festivities");
    break;

  default:
    console.log("Invalid month");
    break;
}

//8.player input handling
const playerInput = " boolean";
switch (typeof playerInput) {
  case "number":
    {
      console.log(` the var type of is ${playerInput} `);
    }
    break;

  case "string":
    {
      console.log(` the var type of is ${playerInput} `);
    }
    break;

  case "boolean":
    {
      console.log(` the var type of is ${playerInput} `);
    }
    break;

  default:
    console.log(` the var typeof is not valid  `);
    break;
}
//9.Game Update release Schedule
const updateMonth = 5;
switch (updateMonth) {
  case 1:
  case 2:
  case 3:
    {
      console.log("Q1");
    }
    break;

  case 4:
  case 5:
  case 6:
    {
      console.log("Q2");
    }
    break;
  case 7:
  case 8:
  case 9:
    {
      console.log("Q3");
    }
    break;
  case 10:
  case 11:
  case 12:
    {
      console.log("Q4");
    }
    break;
}
