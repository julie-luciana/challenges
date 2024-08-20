console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // Log all data
    console.log("Data: ", data);

    // Log all names list
    const allNames = data.results.map((person) => person.name);
    console.log("All names: ", allNames);

    // Log all persones with brown hair
    const personsWithBrownHair = data.results.filter((person) =>
      person.hair_color.includes("brown")
    );
    console.log("People with brown hair: ", personsWithBrownHair);

    // R2-D2 eye color
    const r2d2 = data.results.find((character) => character.name === "R2-D2");
    console.log("eye color of R2-D2: ", r2d2.eye_color);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(url);
/**
 * 
Inside of the `fetchData()` function, use the `url` variable to fetch data from the Star Wars API.

Log the fetched data to the console and play around with it:

- log the entire data object
- log different values of the data object
- Bonus: Can you log the eye color of R2-D2?

The following hints may guide you:

- use a `try...catch` block
- make sure to wait for all asynchronous operations
- make sure to handle bad responses from the API as well
- you can test bad responses via adding a random string of characters to the end of the URL stored in the url variable
 */
