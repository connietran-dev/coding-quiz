var body = document.body;

// Create mainDiv to center content
var mainDiv = document.createElement("div");

// Create elements for quiz
var quizQuestion = document.createElement("h1");
var quizChoices = document.createElement("div");
var startQuiz = document.createElement("button");

// Set default text upon first load
quizQuestion.textContent = "Coding Quiz Challenge";
quizChoices.innerHTML = "<p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>";
startQuiz.textContent = "Start Quiz";

// Append to document for display
body.appendChild(mainDiv);

mainDiv.appendChild(quizQuestion);
mainDiv.appendChild(quizChoices);
mainDiv.appendChild(startQuiz);


// When "Start Quiz" button is clicked, runFirstQuestion and hide button
var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function() {
  runFirstQuestion();
  startQuiz.setAttribute("style", "visibility: hidden;")
});


// Display first question

function runFirstQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "Commonly used data types DO NOT include:";
quizChoices.innerHTML = "<li>strings</li><li>booleans</li><li>alerts</li><li>numbers</li>";

};


// runSecondQuestion() on click of li




function runSecondQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";
quizChoices.innerHTML = "<li>quotes</li><li>curly brackets</li><li>parentheses</li><li>square brackets</li>";

};