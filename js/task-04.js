

// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
const refs = {
    counter: document.getElementById('counter'),
    value: document.getElementById('value'),
    decrementBtn: counter.querySelector("[data-action=increment]"),
    incrementBtn: counter.querySelector("[data-action=decrement]"),
}

let counterValue = 0;
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
refs.decrementBtn.addEventListener('click', () => {
    counterValue++;
    refs.value.textContent = counterValue;
});
refs.incrementBtn.addEventListener('click', () => {
    counterValue--;
    refs.value.textContent = counterValue;
});



// Оновлюй інтерфейс новим значенням змінної counterValue.