// console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
console.log(outputSection);

pizzaInput1.addEventListener("input", () => {
  console.log("input 1");
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  console.log("input 2");
  const pizzaSize1 = pizzaInput1.value;
  const pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaArea1 = (diameter1 / 2) ** 2 * Math.PI;
  const pizzaArea2 = (diameter2 / 2) ** 2 * Math.PI;
  output.textContent = Math.round(
    ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100
  );
}

// Task 2

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = result + "px";
}

// Task 3

function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor = `var(${
    size1 <= size2 ? "--green" : "--red"
  }`;
}
