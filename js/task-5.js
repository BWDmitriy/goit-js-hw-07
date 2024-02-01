function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector('button.change-color');
const spanColor = document.querySelector('span.color');

const changeColor = () => {
  const randomizedColor = getRandomHexColor();
  document.body.style.backgroundColor = randomizedColor;
  spanColor.textContent = randomizedColor;
};
colorButton.addEventListener('click', changeColor);
