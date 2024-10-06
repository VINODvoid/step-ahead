// Handle Signup Form Submission
// Handle Signup Form Submission
// Handle Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/v1/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullname: name, email, phone, password }),
        });

        const data = await response.json();
        alert(data.message);
        if (response.ok) {
            // Redirect to login page after successful signup
            window.location.href = './login.html';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Signup failed. Please try again.');
    }
});


// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('identifier').value; // Using email instead of identifier
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Adjusted to match your backend
        });

        const data = await response.json();
        alert(data.message);
        if (response.ok) {
            // Redirect to the main HTML page after successful login
            window.location.href = './sample.html'; // Ensure this path is correct
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please try again.');
    }
});
