console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const time = new Date().getHours();
  if ((6 <= time) & (time <= 12)) {
    return "Good Morning";
  } else if ((13 <= time) & (time <= 18)) {
    return "Good Afternoon";
  } else if ((19 <= time) & (time <= 22)) {
    return "Good Evening";
  }
  return "Good Night";
}

function getDayColor() {
  // Code here
  const weekday = new Date().getDay();
  console.log(weekday);
  switch (weekday) {
    case 1: //Monday
      return "darkgrey";
    case 2: //Tuesday
    case 3: //Wednesday
    case 4: //Thursday
    case 5:
      return "lightblue";
    case 6:
    case 7:
      return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
