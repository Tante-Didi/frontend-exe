const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];

//2. Setup a Target Element
//Fetching the Container
const divContainer = document.querySelector(".container");

//3. Creating an Ordered List
//Initialization Create an ordered list element (<ol>)
const olEl = document.createElement("ol");

//Styling the List-
// Update the style of the list to remove the default bullet points by setting the listStyleType property to 'none'
olEl.style.listStyleType = "none";

//4.Looping through Users and creating + 5.Creating and Appending li items
users.forEach((el) => {
  const liEl = document.createElement("li");
  liEl.setAttribute("data-id", el.id);
  liEl.textContent = `${el.firstName} ${el.lastName}`;
  olEl.appendChild(liEl);
  divContainer.appendChild(olEl);
});

//5.2 Setting Data Attribute
// //Use the setAttribute method to add a custom data attribute( data-id) to the list item. This will store the user's unique ID, making it retrievable directly from the DOM element
// liEl.setAttribute("data-id", el.id);

// //5.3 Setting Text Content
// //Set the text content of the list item to display the user's first and last name
// liEl.textContent = `${el.firstName} ${el.lastName}`;

// //5.4 Appending to Parent Elements

// //Append the created list item to the ordered list
// olEl.appendChild(liEl);

// //Append the ordered list to the target container
// divContainer.appendChild(olEl);

//rendering the list
