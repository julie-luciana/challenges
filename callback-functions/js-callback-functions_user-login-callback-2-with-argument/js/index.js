console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
// 1. function with function keyword

// Define the callback function using the "function" keyword
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

// Pass the callback function "showWelcomeMessage" to "handleUserLogin"
handleUserLogin(showWelcomeMessage);

// 2. callback function as an anonymous function
// arrow function
handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are logged in now.`);
});

// regular function
handleUserLogin(function (userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
});

/**
 * You should write a callback function in two different ways.
In both cases your callback function should accept one parameter: 
"userName".
Use the parameter to log the following message to the console:
"Welcome Jane Doe! You are logged in now."

1. Write a function with the "function" keyword named 
"showWelcomeMessage"
   Call "handleUserLogin" and pass your callback function as the 
   first argument.
   (You should see the log from your callback message)
2. Call "handleUserLogin" again but this time write the callback 
function as an anonymous function **inside** the function call 
(i.e. between the round brackets).
   (You should see the log from your callback message)
 */
