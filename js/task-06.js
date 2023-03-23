// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const validator = document.getElementById('validation-input')


validator.addEventListener('blur', validate)

function validate (){
    const inputValue = validator.value;
  const maxLength = validator.getAttribute('data-length');

  if (inputValue.length === parseInt(maxLength)) {
    validator.classList.add('valid');
    validator.classList.remove('invalid');
  } else {
     validator.classList.add('invalid');
     validator.classList.remove('valid');
  }
}