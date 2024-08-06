console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

//1. Declaring Variables

const darkModeButton = document.querySelector('[data-js="dark-mode-button"]');

const lightModeButton = document.querySelector('[data-js="light-mode-button"]');

const toggleButton = document.querySelector('[data-js="toggle-button-button"]');

/* 
Add some interactivity to this website. 
You can use the following hints as guideline:

- if the body has the class "dark", 
the page is displayed in dark mode

- query all 3 buttons with the 'data-js' attribute

- add an event listener to each button:
  - "switch to dark mode" button always 
  adds the class "dark" to the body

  - "switch to light mode" button always 
  removes the class "dark" from the body

  - "toggle mode" button toggles the 
  class "dark" on the body

Switch to the index.js file and find some light where there seems to be only darkness!
*/
