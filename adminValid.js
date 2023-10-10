const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (username.value === '' || password.value === '') {
    alert('Please fill in all fields');
  } else if (username.value !== 'admin' || password.value !== 'password') {
    alert('Invalid username or password');
  } else {
    form.submit();
  }
  if (username.value === 'Prerna_Jha' && password.value === 'Pjha') {
    window.location.href = 'admin_dashboard.html';
  } else {
    alert('Invalid username or password. Please try again.');
  }
});