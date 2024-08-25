console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

/* 1.  Write a function with the "function" keyword named "showWelcomeMessage".
Call "handleUserLogin" and pass your callback function as the first argument.
(You should see the log from your callback message) */
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}
handleUserLogin(showWelcomeMessage);
// Welcome Jane Doe! You are logged in now as admin.

/*2.  Call "handleUserLogin" again but this time write the callback function as an anonymous function **inside** the function call (i.e. between the round brackets).
    (You should see the log from your callback message) */
handleUserLogin((userName, userRole) => {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
// Welcome Jane Doe! You are logged in now as admin.

handleUserLogin(function (userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
});
// Welcome Jane Doe! You are logged in now as admin.
