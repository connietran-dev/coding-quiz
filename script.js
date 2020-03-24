// When "Start Quiz" button is clicked, create the below HTML elements.
// TODO: And use data-attributes to set default elements to blank so they no longer show


var body = document.body;

// Create mainDiv to center content
var mainDiv = document.createElement("div");

var quizQuestion = document.createElement("h1");
var quizChoices = document.createElement("div");
var startQuiz = document.createElement("button");

quizQuestion.textContent = "Coding Quiz Challenge";
quizChoices.innerHTML = "<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>";
startQuiz.textContent = "Start Quiz";

body.appendChild(mainDiv);

mainDiv.appendChild(quizQuestion);
mainDiv.appendChild(quizChoices);
mainDiv.appendChild(startQuiz);


var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function() {
  runFirstQuestion();
  startQuiz.setAttribute("style", "visibility: hidden;")
});



function runFirstQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "Commonly used data types DO NOT include:";
quizChoices.innerHTML = "<ol><li>strings</li><li>booleans</li><li>alerts</li><li>numbers</li></ol>";

};



function runSecondQuestion() {

// Set the body to a variable
var body = document.body;

// Create div containers to center content
var mainDiv = document.createElement("div");

// Create div containers for trivia question
var quizQuestion = document.createElement("div");
var quizChoices = document.createElement("div");

// Set the text content of trivia question and choices
quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";
quizChoices.innerHTML = "hello";

// Append elements to document for display
body.appendChild(mainDiv);
mainDiv.appendChild(quizQuestion);
mainDiv.appendChild(quizChoices);

};