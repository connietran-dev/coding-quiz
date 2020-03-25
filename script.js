var body = document.body;

// Create elements for quiz
var quizQuestion = document.createElement("h1");
var quizInstructions = document.createElement("p");
var startQuiz = document.createElement("button");

// Set default text upon first load
quizQuestion.textContent = "Coding Quiz Challenge";
quizInstructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
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
  console.log("Start quiz");
  runFirstQuestion();
});



// DISPLAY FIRST QUESTION

var quizChoiceA;
var quizChoiceB;
var quizChoiceC;
var quizChoiceD;


function runFirstQuestion() {

  // Set the text content of trivia question and choices
  quizQuestion.textContent = "Commonly used data types DO NOT include:";

  quizChoiceA = document.createElement("p");
  quizChoiceA.setAttribute("class", "choiceA");
  quizChoiceA.textContent = "strings";
  body.appendChild(quizChoiceA);

  quizChoiceA.addEventListener("click", function() {
    
    runSecondQuestion();
    
  });


  quizChoiceB = document.createElement("p");
  quizChoiceB.setAttribute("class", "choiceB");
  quizChoiceB.textContent = "booleans";
  body.appendChild(quizChoiceB);

  quizChoiceB.addEventListener("click", runSecondQuestion);

  quizChoiceC = document.createElement("p");
  quizChoiceC.setAttribute("class", "choiceC");
  quizChoiceC.textContent = "alert";
  body.appendChild(quizChoiceC);

  quizChoiceC.addEventListener("click", runSecondQuestion);

  var quizChoiceD = document.createElement("p");
  quizChoiceD.setAttribute("class", "choiceD");
  quizChoiceD.textContent = "numbers";
  body.appendChild(quizChoiceD);

  quizChoiceD.addEventListener("click", runSecondQuestion);

};



// DISPLAY SECOND QUESTION

function runSecondQuestion() {

// Set the text content of trivia question and choices
quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";

  quizChoiceA.textContent = "quotes";
  quizChoiceA.addEventListener("click", runSecondQuestion);


  quizChoiceB.textContent = "curly brackets";
  quizChoiceB.addEventListener("click", runSecondQuestion);


  quizChoiceC.textContent = "parentheses";
  quizChoiceC.addEventListener("click", runSecondQuestion);

  quizChoiceD.textContent = "square brackets";
  quizChoiceC.addEventListener("click", runSecondQuestion);

};