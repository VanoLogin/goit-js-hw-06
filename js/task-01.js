// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

const listItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItem.length}`);

const categoriesAll = document.querySelectorAll('ul#categories > li.item');

categoriesAll.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const categoryItemsCount = category.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  
  console.log(`Elements: ${categoryItemsCount}`);
});

