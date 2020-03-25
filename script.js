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

  // Set the text content of trivia question
  quizQuestion.textContent = "Commonly used data types DO NOT include:";


  // Create HTML elements for answer choices
  // On click, run second question and display result

  // Answer choice A
  quizChoiceA = document.createElement("p");
  quizChoiceA.setAttribute("class", "choiceA");
  body.appendChild(quizChoiceA);

  quizChoiceA.textContent = "strings";
  quizChoiceA.addEventListener("click", function() {
    runSecondQuestion();
    displayWrong();
  });


  // Answer choice B
  quizChoiceB = document.createElement("p");
  quizChoiceB.setAttribute("class", "choiceB");
  body.appendChild(quizChoiceB);

  quizChoiceB.textContent = "booleans";
  quizChoiceB.addEventListener("click", function() {
    runSecondQuestion();
    displayWrong();
  });


  // Answer choice C
  quizChoiceC = document.createElement("p");
  quizChoiceC.setAttribute("class", "choiceC");
  body.appendChild(quizChoiceC);

  quizChoiceC.textContent = "alerts";
  quizChoiceC.addEventListener("click", function() {
    runSecondQuestion();
    displayCorrect();
  });


  // Answer choice D
  quizChoiceD = document.createElement("p");
  quizChoiceD.setAttribute("class", "choiceD");
  body.appendChild(quizChoiceD);

  quizChoiceD.textContent = "numbers";
  quizChoiceD.addEventListener("click", function() {
    runSecondQuestion();
    displayWrong();
  });
};






// DISPLAY SECOND QUESTION

function runSecondQuestion() {

  // Set the text content of trivia question and choices
  quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";


  // Set text answer choices
  quizChoiceA.textContent = "quotes";
  quizChoiceA.addEventListener("click", function() {
    runThirdQuestion();
    displayWrong();
  });


  quizChoiceB.textContent = "curly brackets";
  quizChoiceB.addEventListener("click", function() {
    runThirdQuestion();
    displayWrong();
  });


  quizChoiceC.textContent = "parentheses";
  quizChoiceC.addEventListener("click", function() {
    runThirdQuestion();
    displayWrong();
  });


  quizChoiceD.textContent = "square brackets";
  quizChoiceD.addEventListener("click", function() {
   runThirdQuestion();
   displayCorrect();
  });


  // Create divs for result from first question

  lineBreak = document.createElement("hr");
  body.appendChild(lineBreak);

  choiceResult = document.createElement("div");
  choiceResult.setAttribute("class", "result");
  body.appendChild(choiceResult);

};



// THIRD QUESTION


function runThirdQuestion() {

  quizQuestion.textContent = "Arrays in Javascript can be used to store _________";

  // Set text answer choices
  quizChoiceA.textContent = "numbers and strings";
  quizChoiceA.addEventListener("click", function() {
    runFourthQuestion();
    displayWrong();
  });


  quizChoiceB.textContent = "other arrays";
  quizChoiceB.addEventListener("click", function() {
    runFourthQuestion();
    displayWrong();
  });


  quizChoiceC.textContent = "booleans";
  quizChoiceC.addEventListener("click", function() {
    runFourthQuestion();
    displayWrong();
  });


  quizChoiceD.textContent = "all of the above";
  quizChoiceD.addEventListener("click", function() {
   runFourthQuestion();
   displayCorrect();
  });

};



function runFourthQuestion() {

  quizQuestion.textContent = "String values must be enclosed within _________ when being assigned to variables";

  // Set text answer choices
  quizChoiceA.textContent = "commas";
  quizChoiceA.addEventListener("click", function() {
    // runFourthQuestion();
    displayWrong();
  });


  quizChoiceB.textContent = "curly brackets";
  quizChoiceB.addEventListener("click", function() {
    // runFourthQuestion();
    displayWrong();
  });


  quizChoiceC.textContent = "quotes";
  quizChoiceC.addEventListener("click", function() {
    // runFourthQuestion();
    displayCorrect();
  });


  quizChoiceD.textContent = "parentheses";
  quizChoiceD.addEventListener("click", function() {
  //  runFourthQuestion();
   displayCorrect();
  });



};







// FUNCTIONS FOR DISPLAYING CORRECT OR WRONG


function displayCorrect() {
  choiceResult.textContent = "Correct!";
}

function displayWrong() {
  choiceResult.textContent = "Wrong!";
}