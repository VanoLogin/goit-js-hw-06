// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

// Додасть назву інгредієнта як його текстовий вміст

// Додасть елементу клас item.

// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const pushAllIngredients = document.getElementById('ingredients');

const createList = (ingredient) => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  return li;
}
const itemIngredients = ingredients.map(createList);


pushAllIngredients.append(...itemIngredients);

