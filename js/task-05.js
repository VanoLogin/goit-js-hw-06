// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
    nameInput: document.getElementById('name-input'),
    nameOutput: document.getElementById('name-output'),
}

refs.nameInput.addEventListener('input', () => {
    refs.nameOutput.textContent = refs.nameInput.value.trim() || "Ananimus";
});
    
