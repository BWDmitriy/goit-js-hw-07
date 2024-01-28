function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const numberInput = document.querySelector('input#input-value');
const createBtn = document.querySelector('#create-button');
const destroyBtn = document.querySelector('#destroy-button');

let boxAmount = 0;
numberInput.addEventListener('input', e => {
  boxAmount = e.target.value;
});

createBtn.addEventListener('click', createBoxes);
function createBoxes() {
  if (boxAmount > 0 && boxAmount <= 100) {
    for (let i = 0; i < boxAmount; i++) {
      const newBox = document.createElement('div');
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = 30 + 10 * boxes.children.length + 'px';
      newBox.style.height = 30 + 10 * boxes.children.length + 'px';
      newBox.className = 'box';
      boxes.append(newBox);
    }
  }
  numberInput.value = 0;
  boxAmount = 0;
}
destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  const boxesList = document.querySelectorAll('.box');
  for (const box of boxesList) {
    box.remove();
  }
  boxAmount = 0;
}
