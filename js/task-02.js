const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingRef = document.querySelector('#ingredients');

const ingList = ingredients.map((element) => {
  const li = document.createElement('li');
  li.classList.add('item');
  // li.textContent = element;
  // додатково додаємо тег <p> замість li.textContent = element;
  li.innerHTML = `<p>${element}</p>`;
  return li;
});

ingRef.append(...ingList);


// ==========================================================
// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul.ingredients.