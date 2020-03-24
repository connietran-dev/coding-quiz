var body = document.body;

// Create elements for quiz
var quizQuestion = document.createElement("h1");
var quizInstructions = document.createElement("p");
var startQuiz = document.createElement("button");

// Set default text upon first load
quizQuestion.textContent = "Coding Quiz Challenge";
quizInstructions.innerHTML = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
startQuiz.textContent = "Start Quiz";

// Append to document for display
body.appendChild(quizQuestion);
body.appendChild(quizInstructions);
body.appendChild(startQuiz);


// When "Start Quiz" button is clicked, hide button and runFirstQuestion() 
var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function() {
  quizInstructions.setAttribute("style", "display: none;");
  startQuiz.setAttribute("style", "display: none;");
  runFirstQuestion();
});


// Display first question

function runFirstQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "Commonly used data types DO NOT include:";

var quizChoices = document.createElement("ol");

quizChoices.innerHTML = "<li>strings</li><li>booleans</li><li>alerts</li><li>numbers</li>";

body.appendChild(quizChoices);


};


// runSecondQuestion() on click of li




function runSecondQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";

quizChoices.innerHTML = "<li>quotes</li><li>curly brackets</li><li>parentheses</li><li>square brackets</li>";

};