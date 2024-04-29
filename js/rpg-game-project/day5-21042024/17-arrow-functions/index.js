// 1. Simple Arrow Function Conversion
console.log(`------------------------------1------------------------`);
/* Expression function 
 function getPlayerName(player) {
  return player.name;
}*/

/*Arrow Function*/
const getPlayerName = (player) => player.name;

// 2. Control Flow--- if-else---in Arrow Functions
console.log(`------------------------------2------------------------`);

/*function getPlayerHealth(health) {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }*/

const getPlayerHealth = (health) => {
  if (health > 70) {
    return "High";
  } else if (health > 40) {
    return "Medium";
  } else {
    return "Low";
  }
};

// 3. Arrow Functions with Multiple Operations
console.log(`------------------------------3------------------------`);
/*function getTotalInventoryValue(items) {
  let totalValue = 0;
  for (let i = 0; i < items.length; i++) {
    totalValue += items[i].value;
  }
  return "Total inventory value is " + totalValue;
}*/

const getTotalInventoryValue = (items) => {
  let totalValue = 0;
  items.forEach((item) => {
    totalValue = totalValue + items.value;
  });
  return `Total inventory value is  ${totalValue}`;
};

// 4. Arrow Functions as Callbacks
console.log(`------------------------------4------------------------`);
/*let sortedItems = items.sort(function (a, b) {
  return b.value - a.value;
});*/

let sortedItems = items.sort((a, b) => b.value - a.value);

// 5. Implicit Return with Arrow Functions
console.log(`------------------------------5------------------------`);
/*function getItemNames(items) {
  return items.map(function (item) {
    return item.name;
  });
}*/

const getItemNames = (items) => items.map((item) => item.name);
