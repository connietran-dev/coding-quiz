// When "Start Quiz" button is clicked, create the below HTML elements.
// TODO: And use data-attributes to set default elements to blank so they no longer show

var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function() {
  runFirstQuestion();
});



function runFirstQuestion() {

// Set the body to a variable
var body = document.body;

// Create div containers to center content
var mainDiv = document.createElement("div");

// Create div containers for trivia question
var quizQuestion = document.createElement("div");
var quizChoices = document.createElement("div");

// Set the text content of trivia question and choices
quizQuestion.textContent = "Commonly used data types DO NOT include:";
quizChoices.innerHTML = "<li>1. strings</li><li>2. booleans</li><li>3. alerts</li><li>4. numbers</li>";

// Append elements to document for display
body.appendChild(mainDiv);
mainDiv.appendChild(quizQuestion);
mainDiv.appendChild(quizChoices);

};