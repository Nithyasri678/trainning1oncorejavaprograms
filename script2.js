// DOM Elements
const showRegisterButton = document.getElementById('show-register');
const showLoginButton = document.getElementById('show-login');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const registerMessage = document.getElementById('register-message');
const loginMessage = document.getElementById('login-message');

// Show Register Form
showRegisterButton.addEventListener('click', () => {
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
    showRegisterButton.classList.add('active');
    showLoginButton.classList.remove('active');
});

// Show Login Form
showLoginButton.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    showLoginButton.classList.add('active');
    showRegisterButton.classList.remove('active');
});

// Register Form Submission
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Simple validation
    if (password !== confirmPassword) {
        registerMessage.textContent = 'Passwords do not match.';
    } else {
        registerMessage.textContent = '';
        // Simulate successful registration
        alert(`Registration successful! Welcome, ${name}`);
        registerForm.reset();
    }
});

// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    // Simple validation for login (checking if email and password are not empty)
    if (loginEmail === '' || loginPassword === '') {
        loginMessage.textContent = 'Please fill in both fields.';
    } else {
        loginMessage.textContent = '';
        // Simulate successful login
        alert('Login successful!');
        loginForm.reset();
    }
});
