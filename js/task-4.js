const form = document.querySelector('form.login-form');
form.addEventListener('submit', formSubmit);
const inputsList = form.querySelectorAll('input');

function formSubmit(e) {
  e.preventDefault();
  let outputObject = {};
  for (const input of inputsList) {
    // input.name вместо input.type
    let prop = input.name;
    if (input.value.length === 0) {
      return alert('All form fields must be filled in');
    }
    // Добавил обрезку
    outputObject[prop] = input.value.trim();
  }
  console.log(outputObject);
  form.reset();
}
