console.log(
  "------------------------------1----------------------------------"
);
//Exercise 1: Creating a Player Character
function createPlayerCharacter(name, InitialLevel) {
  let level = InitialLevel;
  let xp = 0;
  return {
    getLevel() {
      return level;
    },
    getXP() {
      return xp;
    },
    levelUp() {
      level++;
      console.log(`${name} leveled up to level ${level} XP!`);
    },
    addXP(amount) {
      xp += amount;
      console.log(`${name} gained ${amount} XP!`);
    },
  };
}
console.log(
  "------------------------------2----------------------------------"
);
//Exercise 2: Managing Inventory
function createInventory() {
  let items = [];
  return {
    //method to add an item to the inventory
    addItem(item) {
      items.push(item);
      console.log(`${item} added to the inventory`);
    },
    //method to remove an item from the inventory
    removeItem(item) {
      let index = items.indexOf(item);
      if (!index === -1) {
        items.splice(index, 1);
        console.log(`${item} removed from the inventory`);
      } else {
        console.log(`${item} is not in the inventory`);
      }
    },
    //method to get the list of the items in the inventory
    getItems() {
      const itemsCopy = [...items];
      return itemsCopy;
    },
  };
  return closure;
}
const inventory = createInventory();
inventory.addItem("Axe");
inventory.addItem("sward");
const arr = inventory.getItems();
console.log(arr);
arr.pop();
console.log(inventory.getItems());

console.log(
  "------------------------------3----------------------------------"
);
//Exercise 3: Implementing Abilities
//"דרך אחת לפתור אבל פחות טובה ופחות יציבה כי ניתן יהיה לבצע שינויים בקלות ב"שם" וב"כוח
function createAbility(abilityName, powerOfAnAbility) {
  let powerAbility = powerOfAnAbility;

  return {
    name: abilityName,
    power: powerAbility,
    useAbility: function () {
      console.log(`Using ${abilityName} with power ${powerAbility}!`);
    },
    getPowerAbility: function () {
      return powerAbility;
    },
  };
}

const ability = createAbility("Telekinesis", 100);
Ability.useAbility(); // Outputs: Using Telekinesis with power 100!
console.log(Ability.getPowerAbility()); // Outputs: 100
console.log(
  "----------------------------------------------------------------------"
);

//עדיף לפתור את זה ככה
function createAbility(abilityName, powerOfAnAbility) {
  let powerAbility = powerOfAnAbility;

  return {
    name() {
      return abilityName;
    },
    power() {
      return powerAbility;
    },
    useAbility: function () {
      console.log(`Using ${abilityName} with power ${powerAbility}!`);
    },
    getPowerAbility: function () {
      return powerAbility;
    },
  };
}

const Ability = createAbility("Telekinesis", 100);
Ability.useAbility(); // Using Telekinesis with power 100!
console.log(Ability.getPowerAbility()); //  100

console.log(
  "------------------------------4----------------------------------"
);
//Exercise 4: Handling Enemies
//"דרך אחת לפתור אבל פחות טובה ופחות יציבה כי ניתן יהיה לבצע שינויים בקלות ב"שם" וב"כוח
function createEnemy(name, health) {
  let enemiesHealth = health;
  return {
    name: name,
    health: enemiesHealth,
    useAttack: function () {
      return `the ${name} is attacking ! `;
    },
    reduceHealth: function (damage) {
      enemiesHealth = enemiesHealth - damage;
      if (enemiesHealth > 0) {
        console.log(`the enemy's remaining health is ${enemiesHealth}`);
      } else {
        console.log(`enemy has been defeated `);
      }
    },
    isDefeated: function () {
      return enemiesHealth <= 0;
      ("enemy has been defeated");
    },
  };
}

const enemy44 = createEnemy("Blue-eye soldiers", 20);
console.log(enemy44.useAttack());
enemy44.reduceHealth(3);
enemy44.reduceHealth(7);
console.log(enemy44.isDefeated());
console.log(
  "------------------------------------------------------------------"
);
//עדיף לפתור את זה ככה
function createEnemy(name, health) {
  let enemiesHealth = health;
  return {
    getName() {
      return name;
    },
    getHealth() {
      return enemiesHealth;
    },
    useAttack: function () {
      return `the ${name} is attacking ! `;
    },
    reduceHealth: function (damage) {
      enemiesHealth = enemiesHealth - damage;
      if (enemiesHealth > 0) {
        console.log(`the enemy's remaining health is ${enemiesHealth}`);
      } else {
        console.log(`enemy has been defeated `);
      }
    },
    isDefeated: function () {
      return enemiesHealth <= 0;
      ("enemy has been defeated");
    },
  };
}

const enemy4 = createEnemy("Blue-eye soldiers", 20);
console.log(enemy4.useAttack());
enemy4.reduceHealth(3);
enemy4.reduceHealth(7);
console.log(enemy4.isDefeated());
