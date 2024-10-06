// document.getElementById('quizForm').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const title = document.getElementById('title').value;
//     const question = document.getElementById('question').value;
//     const optionA = document.getElementById('optionA').value;
//     const optionB = document.getElementById('optionB').value;
//     const optionC = document.getElementById('optionC').value;
//     const optionD = document.getElementById('optionD').value;
//     const correctAnswer = document.getElementById('correctAnswer').value;

//     const quizData = {
//         title: title,
//         questions: [
//             {
//                 question: question,
//                 options: [optionA, optionB, optionC, optionD],
//                 correctAnswer: correctAnswer,
//             }
//         ]
//     };

//     try {
//         const response = await fetch('http://localhost:3000/api/v1/quizzes', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(quizData),
//         });

//         const data = await response.json();

//         // Get message div
//         const messageDiv = document.getElementById('message');
        
//         // Display success or error message
//         if (response.ok) {
//             messageDiv.style.color = 'green';
//             messageDiv.textContent = data.message; // Success message
//         } else {
//             messageDiv.style.color = 'red';
//             messageDiv.textContent = data.message || 'An error occurred.'; // Error message
//         }

//     } catch (error) {
//         const messageDiv = document.getElementById('message');
//         messageDiv.style.color = 'red';
//         messageDiv.textContent = 'An unexpected error occurred.'; // General error message
//         console.error('Error:', error);
//     }
// });

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2 // Index of the correct answer
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"],
        answer: 2
    },
    {
        question: "What is the boiling point of water?",
        options: ["50°C", "100°C", "150°C", "200°C"],
        answer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the smallest country in the world?",
        options: ["Vatican City", "Monaco", "San Marino", "Nauru"],
        answer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: 0
    },
    {
        question: "Who discovered penicillin?",
        options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Isaac Newton"],
        answer: 1
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        answer: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"],
        answer: 0
    },
    {
        question: "What is the currency of the United Kingdom?",
        options: ["Dollar", "Euro", "Pound", "Yen"],
        answer: 2
    },
    {
        question: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Niels Bohr", "Galileo Galilei"],
        answer: 0
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Graphite"],
        answer: 2
    },
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Pepper", "Onion"],
        answer: 1
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
        answer: 1
    },
    {
        question: "What is the main language spoken in Brazil?",
        options: ["Spanish", "Portuguese", "English", "French"],
        answer: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who was the first person to step on the moon?",
        options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
        answer: 2
    },
    {
        question: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        answer: 0
    },
    {
        question: "What is the main gas found in the air we breathe?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: 3
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        answer: 1
    },
    {
        question: "What is the freezing point of water?",
        options: ["0°C", "32°F", "100°C", "212°F"],
        answer: 0
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "7", "8", "9"],
        answer: 2
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quizQuestions');
    quizData.forEach((item, index) => {
        const questionHTML = `
            <div class="quiz-question">
                <label class="form-label">${index + 1}. ${item.question}</label>
                <ul class="options">
                    ${item.options.map((option, i) => `
                        <li>
                            <label class="option-label">
                                <input type="radio" name="q${index}" value="${i}"> ${String.fromCharCode(65 + i)}. ${option}
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });
}

function submitQuiz() {
    const results = quizData.map((_, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        return selected ? parseInt(selected.value) : null;
    });

    results.forEach((result, index) => {
        if (result === quizData[index].answer) {
            console.log(`Question ${index + 1}: Correct!`);
        } else {
            console.log(`Question ${index + 1}: Wrong!`);
        }
    });

    alert("Quiz submitted! Thank you.");
}

// Load the quiz when the page loads
window.onload = loadQuiz;












