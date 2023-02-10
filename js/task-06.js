const inputEl = document.querySelector('#validation-input');



inputEl.addEventListener('blur', event => {
 if(event.currentTarget.value.length === Number(inputEl.dataset.length)){
  inputEl.classList.add('valid');
  inputEl.classList.remove('invalid')
 } else {inputEl.classList.add('invalid')}
});




