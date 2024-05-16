//Initialization
const slides = document.querySelectorAll("img");

let currentIndex = 0;

// //Moving Between Slides:
const moveSlide = (direction) => {
  slides[currentIndex].classList.remove("active"); //use the classList API to remove classes
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > slides.length - 1) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add("active"); //use the classList API to add classes
};
