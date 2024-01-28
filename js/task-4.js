const form = document.querySelector('form.login-form');
form.addEventListener('submit', formSubmit);
const inputsList = form.querySelectorAll('input');

function formSubmit(e) {
  e.preventDefault();
  let outputObject = {};
  for (const input of inputsList) {
    let prop = input.type;
    if (input.value.length === 0) {
      return alert('All form fields must be filled in');
    }
    outputObject[prop] = input.value;
  }
  console.log(outputObject);
  form.reset();
}
