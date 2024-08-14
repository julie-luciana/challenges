console.clear();

/*
1: The function calls below do not work 
properly yet. Make the function
   printSquare log the square of the 
   parameter to the console.
   The formula is: square = number * number
*/

function printSquare(number) {
  square = number * number;
  console.log(square);
}

printSquare(3);
printSquare(5);

/*
<<<<<<< HEAD
2: We want to use a function which accepts the radius of a circle 
as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
=======
2: We want to use a function which accepts 
the radius of a circle as a parameter and logs
   the circumference to the console. 
   The function does not exist yet.
   The formula is: 
   circumference = 2 * Pi * radius
>>>>>>> e3f5eb52e63db95925d8049ab8b6a04fedb427a6
*/
function printCircumference(radius) {
  /* circumference = 2 * Math.PI * radius;
  console.log(circumference);
  */
  console.log(2 * Math.PI * radius);
}
// Uncomment the following
//function calls and implement the
//function printCircumference

<<<<<<< HEAD
function printCircumference(radius) {
  circumference = 2 * Math.PI * radius;
  console.log(circumference);
} // Uncomment the following function calls and implement the function printCircumference

=======
>>>>>>> e3f5eb52e63db95925d8049ab8b6a04fedb427a6
printCircumference(4);
printCircumference(6);

/*
<<<<<<< HEAD
3: We want to use a function which accepts the width and length of a 
rectangle
   and prints the following text to the console: 
   "The area of the rectangle is ?".
   
   The function should print the correct area 
   instead of the question mark "?".
=======
3: We want to use a function which 
accepts the width and length of a rectangle
   and prints the following text to the 
   console: "The area of the rectangle is ?".
   The function should print the correct 
   area instead of the question mark "?".
>>>>>>> e3f5eb52e63db95925d8049ab8b6a04fedb427a6
   The function does not exist yet.
   The formula is: area = width * length
*/

function printRectangleArea(width, length) {
  area = width * length;
  console.log("The area of the rectangle is " + area);
}
// Uncomment the following function calls and implement the function printRectangleArea
<<<<<<< HEAD
function printRectangleArea(width, lenght) {
  area = width * lenght;
  console.log(area);
}
=======

>>>>>>> e3f5eb52e63db95925d8049ab8b6a04fedb427a6
printRectangleArea(5, 7);
printRectangleArea(3, 4);
