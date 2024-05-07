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
  let items=[];
  return {
    //method to add an item to the inventory
    addItem(item) {
     items.push(item);
     console.log(`${item} added to the inventory`);
    },
    //method to remove an item from the inventory
    removeItem(item){
      let index=items.indexOf(item);
      if (!index===-1) {
        items.splice(index,1);
        console.log(`${item} removed from the inventory`);
      }else{
          console.log(`${item} is not in the inventory`);
        }
        
      }
      //method to get the list of the items in the inventory
      getItems(){
         const itemsCopy=[...items];
        return itemsCopy;
      }
    };
    return closure;
  };
  const inventory=createInventory()
  inventory.addItem('Axe');
  inventory.addItem('sward');
  const arr=inventory.getItems();
  console.log(arr);
  arr.pop();
  console.log(inventory.getItems());


console.log(
  "------------------------------3----------------------------------"
);
//Exercise 3: Implementing Abilities

console.log(
  "------------------------------4----------------------------------"
);
//Exercise 4: Handling Enemies
function createAbility(name,power){

}