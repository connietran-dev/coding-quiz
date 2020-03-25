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


  // Create HTML elements for answer choices

  // Answer choice A
  quizChoiceA = document.createElement("p");
  quizChoiceA.setAttribute("class", "choiceA");
  body.appendChild(quizChoiceA);

  quizChoiceA.textContent = "strings";
  quizChoiceA.addEventListener("click", runSecondQuestion);


  // Answer choice B
  quizChoiceB = document.createElement("p");
  quizChoiceB.setAttribute("class", "choiceB");
   body.appendChild(quizChoiceB);

  quizChoiceB.textContent = "booleans";
  quizChoiceB.addEventListener("click", runSecondQuestion);


  // Answer choice C
  quizChoiceC = document.createElement("p");
  quizChoiceC.setAttribute("class", "choiceC");
  body.appendChild(quizChoiceC);

  quizChoiceC.textContent = "alert";
  quizChoiceC.addEventListener("click", runSecondQuestion);


  // Answer choice D
  quizChoiceD = document.createElement("p");
  quizChoiceD.setAttribute("class", "choiceD");
  body.appendChild(quizChoiceD);

  quizChoiceD.textContent = "numbers";
  quizChoiceD.addEventListener("click", runSecondQuestion);

};



function checkFirstQuestion() {
  if (3>7) { 
    return "Right!"
  } 
  else { 
    return "Wrong!" 
  };
};




// DISPLAY SECOND QUESTION

function runSecondQuestion() {

  // Set the text content of trivia question and choices
  quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";


  // Set text answer choices
  quizChoiceA.textContent = "quotes";
  quizChoiceA.addEventListener("click", runSecondQuestion);


  quizChoiceB.textContent = "curly brackets";
  quizChoiceB.addEventListener("click", runSecondQuestion);


  quizChoiceC.textContent = "parentheses";
  quizChoiceC.addEventListener("click", runSecondQuestion);


  quizChoiceD.textContent = "square brackets";
  quizChoiceD.addEventListener("click", runSecondQuestion);


  // Show result from first question

  lineBreak = document.createElement("hr");
  body.appendChild(lineBreak);

  choiceResult = document.createElement("div");
  choiceResult.setAttribute("class", "result");

  choiceResult.textContent = checkFirstQuestion();
  body.appendChild(choiceResult);

};