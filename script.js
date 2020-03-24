/*
// Create default landing

    <h1>Coding Quiz Challenge</h1>
    <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
    <button>Start Quiz</button>

*/


// Set the body to a variable
var body = document.body;

// Create div containers to center content
var mainDiv = document.createElement("div");

// Create div containers for trivia question
var quizQuestion = document.createElement("div");
var quizChoices = document.createElement("div");

// Set the text content of trivia question and choices
quizQuestion.textContent = "This is the trivia question";
quizChoices.textContent = "These are the choices";

// Append elements to document for display
body.appendChild(mainDiv);
mainDiv.appendChild(quizQuestion);
mainDiv.appendChild(quizChoices);


