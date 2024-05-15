//Textual RPG Game System
/*Construct Obj-oriented textual Role-Playing-Game(RPG) system in JS ES6,
focusing on encapsulating data and behaviors,
demonstrating inheritance,
implementing polymorphism
using getters/setters with private properties.*/

/*EXERCISE 1 : THE CHARACTER SUPERCLASS*/
/*1.1 define class*/
class Character {
  #name;
  #level;
  #health;
  #inventory;
}
//1.2 constructor accept 3 parameters.initialize private instance variables
constructor(name, level, health){
  this.#name = name;
  this.#level = level;
  this.#health = health;
  this.#inventory = [];
}
//1.3 implementing getters to allow read access to these properties
//Getter- Retrieves and returns the value of a property.
//It looks like a regular property access, but it's actually calling a method.
//get, keyword followed by the property name without parentheses
get Name(){
  return this.#name;
}
get level(){
  return this.#level;
}

get health(){
  return this.#health;
}

//1.4 implementing setters
//setters-Sets or updates the value of a property.
//set ,keyword followed by the property name within parentheses, along with a parameter representing the new value to set.
set 