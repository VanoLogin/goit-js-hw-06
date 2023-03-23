function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = {
  inputNumber: document.querySelector('#controls > input'),
  btnCreateBoxes: document.querySelector('[data-create]'),
  btnDestroyBoxes: document.querySelector('[data-destroy]'),
  myBoxes:  document.getElementById('#boxes'),
}

btnCreateBoxes.addEventListener('click', onCreateBtnClick);

btnDestroyBoxes.addEventListener('click', onDestroyBtnClick);


function destroyBoxes() {
  boxesDiv.innerHTML = '';
}