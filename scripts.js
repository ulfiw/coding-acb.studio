
"use strict"; // Enables strict mode
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordMeterFill = document.getElementById('password-meter-fill');
const passwordFeedback = document.getElementById('password-feedback');
const passwordStrengthLabel = document.getElementById('password-strength-label');
const submitButton = document.querySelector('button[type="submit"]');

const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const rules = [
  { regex: /.{8,}/, messageInvalid: 'At least 8 characters needed', messageValid: 'Number of characters correct' },
  { regex: /[!@#$%^&*(),.?":{}|<>]/, messageInvalid: 'At least one special character needed', messageValid: 'One special character included' },
  { regex: /[0-9]/, messageInvalid: 'At least one number needed', messageValid: 'One number included' },
  { regex: /[A-Z]/, messageInvalid: 'At least one uppercase letter needed', messageValid: 'One uppercase letter included' },
  { regex: /[a-z]/, messageInvalid: 'At least one lowercase letter needed', messageValid: 'One lowercase letter included' },
];

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

validateEmail = debounce(() => {
    if (!emailRegex.test(emailInput.value)) {
      emailError.style.display = 'block';
      submitButton.disabled = true;
    } else {
      emailError.style.display = 'none';
      submitButton.disabled = false;
    }
  }, 300);

emailInput.addEventListener('input', validateEmail);

validatePassword = debounce(() => {
  const value = passwordInput.value;
  let strength = 0;
  const feedbackItems = passwordFeedback.querySelectorAll('li');

  rules.forEach((rule, index) => {
    const isValid = rule.regex.test(value);
    const feedbackItem = feedbackItems[index];
    feedbackItem.textContent = rule.message;
    feedbackItem.classList.toggle('valid', isValid);
    feedbackItem.classList.toggle('invalid', !isValid);
    feedbackItem.innerHTML = `<span>${isValid ? '✅' : '❌'}</span>${isValid ? rule.messageValid : rule.messageInvalid}`;
    if (isValid) strength++;
  });

  let strengthLabel;
  if (strength === 0) {
    passwordMeterFill.style.width = '0';
    passwordMeterFill.className = 'password-meter-fill';
    strengthLabel = 'Weak';
  } else if (strength < 3) {
    passwordMeterFill.style.width = '33%';
    passwordMeterFill.className = 'password-meter-fill weak';
    strengthLabel = 'Weak';
  } else if (strength < 5) {
    passwordMeterFill.style.width = '66%';
    passwordMeterFill.className = 'password-meter-fill medium';
    strengthLabel = 'Medium';
  } else {
    passwordMeterFill.style.width = '100%';
    passwordMeterFill.className = 'password-meter-fill strong';
    strengthLabel = 'Strong';
  }

  passwordStrengthLabel.textContent = `Strength: ${strengthLabel}`;

  submitButton.disabled = strength < 5 || !emailRegex.test(emailInput.value);
}, 300);

passwordInput.addEventListener('input', validatePassword);

document.getElementById('registration-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration successful!');
});