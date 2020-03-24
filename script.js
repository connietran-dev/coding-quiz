// When "Start Quiz" button is clicked, create the below HTML elements.
// TODO: And use data-attributes to set default elements to blank so they no longer show

var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function() {
  createElements();
});



function createElements () {

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

};
