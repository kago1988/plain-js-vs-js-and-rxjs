const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function validateForm() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const isValid = email.includes('@') && password.length > 6;
  console.log('Form is valid:', isValid);
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
