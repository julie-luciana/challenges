/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/
// Assign the input element to a variable
const writtenInput = document.querySelector('[data-js="first-input"]');

//Assign the button element to a variable
const buttonUpperCase = document.querySelector('[data-js="button-uppercase"]');

//Add an event listener to the button, so the input value
// turns into uppercase when the button is clicked
buttonUpperCase.addEventListener("click", () => {
  writtenInput.value = writtenInput.value.toUpperCase();
});

//
