const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((color) => {
  renderColorBox(color);
});

/**
 * In the `./js/index.js` file, there is an array `colors` 
 * containing some hex codes. 
 * Create colored boxes from the array of hex codes using the 
 * `forEach` array method.

The following hints may guide you:

- For each hex code a new `div` with the class `color-box` should 
be created.
- The `background-color` of the `div` should be the current hex code.
- The element should be added to the page.


Task 2 
Instead of writing the callback function directly 
inside the forEach method, we can use a function reference.

- Create a new function called `renderColorBox`.
- Copy your code from the arrow function into this new function.
- Use the forEach method with renderColorBox to create the color 
boxes a second time!
 * 
 */
function renderColorBox(color) {
  // Create a new div element
  const colorBox = document.createElement("div");

  // Add the class 'color-box' to the div
  colorBox.classList.add("colorBox");
  // Set the background color of the div to the current hex code
  colorBox.style.backgroundColor = color;
  // Append the div to the container
  document.body.append(colorBox);
}
