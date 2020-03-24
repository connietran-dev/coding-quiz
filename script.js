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

  var quizChoiceA = document.createElement("p");
  quizChoiceA.textContent = "strings";
  body.appendChild(quizChoiceA);

  var quizChoiceB = document.createElement("p");
  quizChoiceB.textContent = "booleans";
  body.appendChild(quizChoiceB);

  var quizChoiceC = document.createElement("p");
  quizChoiceC.textContent = "alert";
  body.appendChild(quizChoiceC);

  var quizChoiceD = document.createElement("p");
  quizChoiceD.textContent = "numbers";
  body.appendChild(quizChoiceD);

};


// runSecondQuestion() on click of li

var quizChoices = document.querySelectorAll("p");


quizChoices.addEventListener("click", function() {
  console.log("clicked");

})

// var listEl = document.querySelector("ol");
// var quizChoices = document.querySelectorAll("li");

// listEl.addEventListener("click", function(event) {
//   event.stopPropagation();
//   if(event.target.matches("li")) {
//     console.log("clicked");
//   }
//   else {
//     console.log("UL");
//   }
// });




function runSecondQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";

quizChoices.innerHTML = "<li>quotes</li><li>curly brackets</li><li>parentheses</li><li>square brackets</li>";

};