const loginFormEl = document.querySelector('.login-form');

loginFormEl.addEventListener('submit', loginForm);

function loginForm(event) {
  event.preventDefault();

  if (
    event.currentTarget.email.value.length === 0 ||
    event.currentTarget.password.value.length === 0
  ) {
    alert('Всі поля повинні бути заповнені!!!');
  } else {
    const loginInfo = {
      password: event.currentTarget.password.value,
      email: event.currentTarget.email.value,
    };

    console.log(loginInfo);

    event.currentTarget.reset();
  }
}
