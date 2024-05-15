//2.Selecting a Specific List Item
const myLi = document.querySelector("li.start-here");

//3.Changing Text Content
myLi.textContent = "main title";

/*----------4.0-- Adding a New Sub Title-------------------*/
//4.1 Traverse to the next sibling
const myLiNextSibling = myLi.nextElementSibling;

//4.2 Select the child unordered list
const myUl = myLiNextSibling.firstElementChild;

//4.3 Create a new list item (<li>) element
const newSubTitle = document.createElement("li");

//4.4 Create a new text node
const subTitleText = document.createTextNode("sub title 4");

//4.5 Append the text node to the newly created list item
newSubTitle.appendChild(subTitleText);

//4.6 append this new list item to the myUl element
myUl.appendChild(newSubTitle);

/*-------------5.0 Removing the Last Title------------------*/

// Navigate to the parent <ul> of the myLi element using myLi.parentElement
const myLiParent = myLi.parentElement;

//remove the last child list item(<li>) of this parent unordered list.
myLiParent.lastElementChild.remove(); // title 3 נמחק

/*---------6.0--Updating the Document's Title---------------------*/
//6.1 Access the document's <head> and store it in a variable
const head = document.querySelector("head");

//6.2 Access the last child element of the <head>
//const title = head.lastElementChild ----- דרך אחת  , וקיימת גם דרך נוספת שורה מתחת
const title = document.head.querySelector("title");

//To modify the title text
title.textContent = "DOM Master"; // "שנינו את כותרת הלשונית מ"דום ללכת" ל"דום מאסטר

/*---------7.0--Updating Paragraph Content---------------------*/
//7.1 Traverse to the <div> that comes after the myLiParent
const div = myLiParent.nextElementSibling;

//7.2 Access the first child of the div ( which is a <p> element)
const p = div.firstElementChild;

//7.3 update the text content of the paragraph to "Now I know how to traverse the DOM :D".
p.textContent = "Now I know how to traverse the DOM :D";
