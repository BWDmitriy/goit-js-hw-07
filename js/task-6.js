function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const numberInput = document.querySelector('input#input-value');
const createBtn = document.querySelector('#create-button');
const destroyBtn = document.querySelector('#destroy-button');

createBtn.addEventListener('click', createBoxes);
function createBoxes() {
  destroyBoxes();
  const boxAmount = parseInt(numberInput.value, 10);
  if (boxAmount > 0 && boxAmount <= 100) {
    for (let i = 0; i < boxAmount; i++) {
      const newBox = document.createElement('div');
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.style.width = `${30 + 10 * i}px`;
      newBox.style.height = `${30 + 10 * i}px`;
      newBox.className = 'box';
      boxes.append(newBox);
    }
  }
  numberInput.value = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxes.innerHTML = '';
}
