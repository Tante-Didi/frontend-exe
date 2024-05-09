//hat will perform specific tasks on an array of player objects.
function processPlayers(playersArray, callback) {
  if (!Array.isArray(playersArray)) {
    throw new Error("This is not an Array ");
  }
  const deepClonePlayersArray = JASON.parse(JASON.stringify(playersArray)); // switch to string and back to Obj
  return deepClonePlayersArray.map((player)=>{
    if (!player.name||!player.health||!player.level||!player.location||!player.inventory) {
      
    }
  }
);
}

const  = [
  {
    id: "e3333e",
    name: "Genadi",
    health: 120,
    level: 10,
    location: "sea",
    inventory: ["sword", "health potion"],
  },
  {
    id: "4883e",
    name: "Yael",
    health: 10,
    level: 4,
    location: "forest",
    inventory: ["sword", "health potion"],
  },
  {
    id: "55e3e",
    name: "Noi",
    health: 40,
    level: 1,
    location: "city",
    inventory: ["sword", "health potion"],
  },
];
