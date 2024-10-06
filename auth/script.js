
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

    const identifier = document.getElementById('identifier').value; // Email or Phone Number
    const password = document.getElementById('password').value;

    console.log('Attempting to log in with:', { identifier, password }); // Debug log

    try {
        const response = await fetch('http://localhost:3000/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ identifier, password }),
        });

        // Log the response for debugging
        console.log('Response status:', response.status);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            const errorData = await response.json();
            alert(errorData.message); // Display the error message if login fails
            return;
        }

        const data = await response.json(); // Parse the response JSON
        alert(data.message);
        
        // Redirect to the main HTML page after successful login
        window.location.href = './index.html'; // Make sure this path is correct
    } catch (error) {
        console.error('Error:', error);
        alert('Login failed. Please try again.');
    }
});
