console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

const getCurrentHour = () => {
  const now = new Date();
  const currentHour = now.getHours();
  if (currentHour === 0) {
    return "12am";
  } else if (currentHour === 12) {
    return "12pm";
  } else if (currentHour <= 11) {
    return currentHour + "am";
  } else {
    return currentHour - 12 + "pm";
  }
};
console.log("1) ", getCurrentHour());

const getVectorLength = (x, y, z) => {
  return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
};
console.log("2) ", getVectorLength(1, 2, 3));

const cleanInput = (string) => {
  return string.toLowerCase().trim();
};
console.log("3) ", cleanInput("Julie"));
/*
Rewrite the following arrow functions as classic functions.
*/

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }

  if (number % 2 === 0) {
    return false;
  }

  return true;
}
console.log("4) ", isOddAndSmall(5));

function add3(a, b, c) {
  a + b + c;
}
console.log("5) ", add3(1, 2, 3));

function repeat10(string) {} string.repeat(10);}
console.log("6) ", repeat10("Julie "));
