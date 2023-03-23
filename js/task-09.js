function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const valueChangesColor = document.querySelector('.color');
const buttonColorChange = document.querySelector('.change-color');
const bodyColor = document.querySelector('body')


buttonColorChange.addEventListener('click', onBtnColorClickChange)

function onBtnColorClickChange (){
  const color = getRandomHexColor()
  bodyColor.style.backgroundColor = color;
  valueChangesColor.textContent = color;

}

