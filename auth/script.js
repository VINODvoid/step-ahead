// Event listener for login form
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const identifier = document.getElementById('identifier').value;
    const password = document.getElementById('password').value;

    console.log('Login Identifier:', identifier);
    console.log('Password:', password);

    // Here you would typically handle authentication
});

// Event listener for signup form
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    console.log('Signup Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Password:', password);

    // Here you would typically handle registration
});
