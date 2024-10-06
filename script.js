// script.js

// Open card function
document.querySelector('.daily-streak').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('card').style.display = 'block';
});

// Close card function
document.getElementById('closeCardBtn').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('card').style.display = 'none';
});

window.addEventListener('load', function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('card').style.display = 'none';
});
