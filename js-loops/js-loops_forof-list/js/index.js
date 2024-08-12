console.clear();
/*Looking at the `./js/index.js` , there is

- an `ol` created and appended to the document
- a string array stored to a variable called `programmingLanguages`.

For each array item, create a list item for the ordered list with its value as visible text. Use the `for...of` loop.

The following hints may guide you:

- What was the property to set the text of an HTML element again?
- Don't forget to append each list item!

Please switch to the `./js/index.js` file and be a navigator!
 */
const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol"); //creating ol
main.append(ol); // placing the created li into the main

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (language of programmingLanguages) {
  const li = document.createElement("li");
  li.textContent = language;
  ol.append(li);
}
/* Erklärung:
programmingLanguages ist das Array, das die Namen der Programmiersprachen enthält: 
["JavaScript", "Python", "Java", "C#", "C++", "PHP", "Ruby"].

for (const language of programmingLanguages) bedeutet, dass die Schleife durch das Array
programmingLanguages geht und jedes Element nacheinander auswählt.

language ist die Variable, die bei jedem Schleifendurchlauf den Wert des aktuellen Elements 
aus programmingLanguages speichert.
Also, beim ersten Durchlauf ist language "JavaScript", beim zweiten Durchlauf "Python" und so weiter, 
bis die Schleife alle Elemente des Arrays durchlaufen hat.

Diese Variable language wird dann im Inneren der Schleife verwendet, um den Textinhalt 
des neuen li-Elements festzulegen (li.textContent = language;). 
Das sorgt dafür, dass jedes Listenelement den Namen einer Programmiersprache anzeigt. */
// --^-- write/change code here --^--
