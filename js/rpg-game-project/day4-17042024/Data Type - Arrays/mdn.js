// .push() , .pop()  ,  includes()  , .shift()  , .unshift() , .indexof() ,.lastIndexOf() ,  .reverse() , .sort() , .join()  , .slice () , .splice() ,.concat()

//-----מוסיף לסוף ומציג את האורך החדש- ולא מקומו באינדקס--------push()-------------------//

//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.

//JavaScript Demo: Array.push()
const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//-------מוציא מהסוף ומציג את מה שהוציא--------pop()--------------------//

//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.

//JavaScript Demo: Array.pop()
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

//--------- נמצא וקיים במערך אמת או שקר---------includes()---------------//

//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//JavaScript Demo: Array.includes()

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

//--------------------------findIndex()-------------------------------------//

//The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

//See also the find() method, which returns the first element that satisfies the testing function (rather than its index).

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3

//-------------removes the first element---------------shift()---------------//

//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.

//JavaScript Demo: Array.shift()
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

//---adds-to the beginning of an array------------unshift()-----------//

//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.

//JavaScript Demo: Array.unshift()
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

//-------------------indexOf()--------------first occurrence-----------------//

//The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. It takes an optional starting position and returns the first occurrence of the specified substring at an index greater than or equal to the specified number.

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);
// Expected output: "The index of the second "dog" is 38"

//-------------------lastIndexOf()----------last occurrence ----------------//

//The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring. It takes an optional starting position and returns the last occurrence of the specified substring at an index less than or equal to the specified number.

const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = "dog";

console.log(
  `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
);
// Expected output: "Index of the last "dog" is 38"

//------משנה מערך מקור--.reverse()----להפוך את המערך הקיים בסדר שלו---------//
//The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

//To reverse the elements in an array without mutating the original array, use toReversed().

const array1 = ["one", "two", "three"];
console.log("array1:", array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// Expected output: "array1:" Array ["three", "two", "one"]

//--משנה מערך מקורי------sort()  למיין נכון את המערך------------------------//
//The sort() method of Array instances sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

//The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

//To sort the elements in an array without mutating the original array, use toSorted().

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

//--- לא-משנה מערך מקור---------------join()---------על ידי איחוד---יוצר סטרינג חדש-----------//

//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

//-- לא משנה מערך מקור---slice()---- בוחר חתיכת קוד מסויימת ומציג רק אותה----//
// ממנה והלאה עד הסוף או עד שנאמר איפה הסוף ,הכוונה משמאל לימין
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//----משנה מערך מקור--------splice()---------הסרה/החלפה/הוספה---------------//
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//--יוצר מערך חדש לכן לא משנה את המערך הקודם--- -----concat()---------//
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//------------------------------------------------------------------------//
