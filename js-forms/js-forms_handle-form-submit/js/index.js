console.clear();

/*Use JavaScript to react to the form submission.

Log all form data (in object form) into the 
console in the submit event handler.

Make sure the form is reset and the First Name 
input is focused after submission.

> 💡 You only have to touch the 
[`js/index.js`](./js/index.js) file.

<br>

## Bonus: Calculate and log the age-badness-sum 
🤷

The formula is: `age + badness`

Log to the console _(replace the values
 between the quotes)_:

> The age-badness-sum of "firstName" is 
"age-badness-sum"
*/

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(event.target); logs the whole form
  // Log all form data (in object form) into the console in the submit event handler.

  // Accessing Interactive Fields
  // While event.target represents the entire form,
  // event.target.elements is a collection of all form
  // elements (form fields, field sets and buttons). (very useful)
  const formElements = event.target.elements;
  //You get access to a specific form field via its name attribute
  // and dot notation:
  console.log(formElements.firstName);
  console.log(formElements.firstName.value);

  //access all input values --> FormData()
  //very useful to easily access the input data of an entire form.
  //! auswendig lernen!!!
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const age = data.age;
  console.log("Age: " + age);
  const badness = data.badness;
  console.log("Badness:  " + badness);

  console.log(`The age-badness-sum of ${data.firstName} is ${age + badness}`);
});
