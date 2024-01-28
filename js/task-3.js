const inputField = document.querySelector('input#name-input');
const outputField = document.querySelector('span#name-output');

inputField.addEventListener('input', e => {
  outputField.textContent = e.target.value;
});
