// SET THE TIMER
var timeEl = document.querySelector(".time");

var secondsLeft = 5;


function setTime() {
  var timerInterval = setInterval(function () {

    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    // Format the secondsLeft when they are a single digit
    if (secondsLeft <= 9) {

      timeEl.textContent = "Time: 0" + secondsLeft;

    }

    if (secondsLeft === 0) {

      clearInterval(timerInterval);
      timeEl.textContent = "Time: " + secondsLeft;
      console.log("time's up");

      var allAnswers = document.querySelectorAll("p");

      for (let i = 0; i < allAnswers.length; i++) {
        const element = allAnswers[i];
        element.remove();
      }

      endQuiz();

    }

  }, 1000);
};




var body = document.body;

var score = 0;

// Create elements for quiz
var quizQuestion = document.createElement("h1");
var quizInstructions = document.createElement("p");
var startQuiz = document.createElement("button");

// Set default text upon first load
quizQuestion.textContent = "Coding Quiz Challenge";
quizQuestion.setAttribute("class", "intro");

quizInstructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
quizInstructions.setAttribute("class", "center");

startQuiz.textContent = "Start Quiz";
startQuiz.setAttribute("class", "button-center");

// Append to document for display
body.appendChild(quizQuestion);
body.appendChild(quizInstructions);
body.appendChild(startQuiz);


// When "Start Quiz" button is clicked, hide button and runFirstQuestion() 
var startQuiz = document.querySelector("button");

startQuiz.addEventListener("click", function () {
  quizInstructions.remove();
  startQuiz.remove();
  setTime();
  runFirstQuestion();
});






// FUNCTIONS FOR DISPLAYING CORRECT OR WRONG

// TODO: Modify code for how results are injected and displayed.

function displayCorrect() {

  // Add to score
  console.log("Current score: " + score);

  // Create divs for result from first question

  lineBreak = document.createElement("hr");
  body.appendChild(lineBreak);

  choiceResult = document.createElement("div");
  choiceResult.setAttribute("class", "result");

  choiceResult.textContent = "Correct!";
  body.appendChild(choiceResult);

  setTimeout(function () {

    choiceResult.remove();
    lineBreak.remove();

  },

    600);

};

function displayWrong() {

  console.log("Current score: " + score);

  lineBreak = document.createElement("hr");
  body.appendChild(lineBreak);

  choiceResult = document.createElement("div");
  choiceResult.setAttribute("class", "result");

  choiceResult.textContent = "Wrong!";
  body.appendChild(choiceResult);

  setTimeout(function () {

    choiceResult.remove();
    lineBreak.remove();

  },

    600);

};




function displayQuestion() {

  console.log("New question");

};




// DISPLAY FIRST QUESTION


function runFirstQuestion() {

  // Set the text content of trivia question
  quizQuestion.textContent = "Commonly used data types DO NOT include:";


  // Create HTML elements for answer choices
  // On click, run second question and display result

  // Answer choice A
  var quizChoiceA = document.createElement("p");
  body.appendChild(quizChoiceA);

  quizChoiceA.textContent = "strings";
  quizChoiceA.addEventListener("click", function () {
    quizChoiceA.remove();
    quizChoiceB.remove();
    quizChoiceC.remove();
    quizChoiceD.remove();
    score -= 10;
    runSecondQuestion();
    displayWrong();
  });


  // Answer choice B
  var quizChoiceB = document.createElement("p");
  body.appendChild(quizChoiceB);

  quizChoiceB.textContent = "booleans";
  quizChoiceB.addEventListener("click", function () {
    quizChoiceA.remove();
    quizChoiceB.remove();
    quizChoiceC.remove();
    quizChoiceD.remove();
    score -= 10;
    runSecondQuestion();
    displayWrong();
  });


  // Answer choice C
  var quizChoiceC = document.createElement("p");
  body.appendChild(quizChoiceC);

  quizChoiceC.textContent = "alerts";
  quizChoiceC.addEventListener("click", function () {
    quizChoiceA.remove();
    quizChoiceB.remove();
    quizChoiceC.remove();
    quizChoiceD.remove();
    score += 15;
    runSecondQuestion();
    displayCorrect();
  });


  // Answer choice D
  var quizChoiceD = document.createElement("p");
  body.appendChild(quizChoiceD);

  quizChoiceD.textContent = "numbers";
  quizChoiceD.addEventListener("click", function () {
    quizChoiceA.remove();
    quizChoiceB.remove();
    quizChoiceC.remove();
    quizChoiceD.remove();
    score -= 10;
    runSecondQuestion();
    displayWrong();
  });
};






// DISPLAY SECOND QUESTION

function runSecondQuestion() {

  // Set the text content of trivia question and choices
  quizQuestion.textContent = "The condition in an if / else statement is enclosed within _________";


  // Set text answer choices
  var quizChoice2A = document.createElement("p");
  body.appendChild(quizChoice2A);

  quizChoice2A.textContent = "quotes";
  quizChoice2A.addEventListener("click", function () {
    quizChoice2A.remove();
    quizChoice2B.remove();
    quizChoice2C.remove();
    quizChoice2D.remove();
    score -= 10;
    runThirdQuestion();
    displayWrong();
  });


  var quizChoice2B = document.createElement("p");
  body.appendChild(quizChoice2B);

  quizChoice2B.textContent = "curly brackets";
  quizChoice2B.addEventListener("click", function () {
    quizChoice2A.remove();
    quizChoice2B.remove();
    quizChoice2C.remove();
    quizChoice2D.remove();
    score -= 10;
    runThirdQuestion();
    displayWrong();
  });


  var quizChoice2C = document.createElement("p");
  body.appendChild(quizChoice2C);

  quizChoice2C.textContent = "parentheses";
  quizChoice2C.addEventListener("click", function () {
    quizChoice2A.remove();
    quizChoice2B.remove();
    quizChoice2C.remove();
    quizChoice2D.remove();
    score += 15;
    runThirdQuestion();
    displayCorrect();
  });


  var quizChoice2D = document.createElement("p");
  body.appendChild(quizChoice2D);

  quizChoice2D.textContent = "square brackets";
  quizChoice2D.addEventListener("click", function () {
    quizChoice2A.remove();
    quizChoice2B.remove();
    quizChoice2C.remove();
    quizChoice2D.remove();
    score -= 10;
    runThirdQuestion();
    displayWrong();
  });

};



// THIRD QUESTION


function runThirdQuestion() {

  quizQuestion.textContent = "Arrays in Javascript can be used to store _________";

  // Set text answer choices

  var quizChoice3A = document.createElement("p");
  body.appendChild(quizChoice3A);

  quizChoice3A.textContent = "numbers and strings";
  quizChoice3A.addEventListener("click", function () {
    quizChoice3A.remove();
    quizChoice3B.remove();
    quizChoice3C.remove();
    quizChoice3D.remove();
    score -= 10;
    runFourthQuestion();
    displayWrong();
  });


  var quizChoice3B = document.createElement("p");
  body.appendChild(quizChoice3B);

  quizChoice3B.textContent = "other arrays";
  quizChoice3B.addEventListener("click", function () {
    quizChoice3A.remove();
    quizChoice3B.remove();
    quizChoice3C.remove();
    quizChoice3D.remove();
    score -= 10;
    runFourthQuestion();
    displayWrong();
  });


  var quizChoice3C = document.createElement("p");
  body.appendChild(quizChoice3C);

  quizChoice3C.textContent = "booleans";
  quizChoice3C.addEventListener("click", function () {
    quizChoice3A.remove();
    quizChoice3B.remove();
    quizChoice3C.remove();
    quizChoice3D.remove();
    score -= 10;
    runFourthQuestion();
    displayWrong();
  });


  var quizChoice3D = document.createElement("p");
  body.appendChild(quizChoice3D);

  quizChoice3D.textContent = "all of the above";
  quizChoice3D.addEventListener("click", function () {
    quizChoice3A.remove();
    quizChoice3B.remove();
    quizChoice3C.remove();
    quizChoice3D.remove();
    score += 10;
    runFourthQuestion();
    displayCorrect();
  });

};



function runFourthQuestion() {

  quizQuestion.textContent = "String values must be enclosed within _________ when being assigned to variables.";

  // Set text answer choices

  var quizChoice4A = document.createElement("p");
  body.appendChild(quizChoice4A);

  quizChoice4A.textContent = "commas";
  quizChoice4A.addEventListener("click", function () {
    quizChoice4A.remove();
    quizChoice4B.remove();
    quizChoice4C.remove();
    quizChoice4D.remove();
    score -= 10;
    runFifthQuestion();
    displayWrong();
  });


  var quizChoice4B = document.createElement("p");
  body.appendChild(quizChoice4B);

  quizChoice4B.textContent = "curly brackets";
  quizChoice4B.addEventListener("click", function () {
    quizChoice4A.remove();
    quizChoice4B.remove();
    quizChoice4C.remove();
    quizChoice4D.remove();
    score -= 10;
    runFifthQuestion();
    displayWrong();
  });


  var quizChoice4C = document.createElement("p");
  body.appendChild(quizChoice4C);

  quizChoice4C.textContent = "quotes";
  quizChoice4C.addEventListener("click", function () {
    quizChoice4A.remove();
    quizChoice4B.remove();
    quizChoice4C.remove();
    quizChoice4D.remove();
    score += 10;
    runFifthQuestion();
    displayCorrect();
  });


  var quizChoice4D = document.createElement("p");
  body.appendChild(quizChoice4D);

  quizChoice4D.textContent = "parentheses";
  quizChoice4D.addEventListener("click", function () {
    quizChoice4A.remove();
    quizChoice4B.remove();
    quizChoice4C.remove();
    quizChoice4D.remove();
    score -= 10;
    runFifthQuestion();
    displayWrong();
  });


};




function runFifthQuestion() {

  quizQuestion.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:";


  // Set text answer choices
  var quizChoice5A = document.createElement("p");
  body.appendChild(quizChoice5A);

  quizChoice5A.textContent = "Javascript";
  quizChoice5A.addEventListener("click", function () {
    quizChoice5A.remove();
    quizChoice5B.remove();
    quizChoice5C.remove();
    quizChoice5D.remove();
    score -= 10;
    endQuiz();
    displayWrong();
  });


  var quizChoice5B = document.createElement("p");
  body.appendChild(quizChoice5B);

  quizChoice5B.textContent = "terminal/bash";
  quizChoice5B.addEventListener("click", function () {
    quizChoice5A.remove();
    quizChoice5B.remove();
    quizChoice5C.remove();
    quizChoice5D.remove();
    score -= 10;
    endQuiz();
    displayWrong();
  });


  var quizChoice5C = document.createElement("p");
  body.appendChild(quizChoice5C);

  quizChoice5C.textContent = "for loops";
  quizChoice5C.addEventListener("click", function () {
    quizChoice5A.remove();
    quizChoice5B.remove();
    quizChoice5C.remove();
    quizChoice5D.remove();
    score -= 10;
    endQuiz();
    displayWrong();
  });


  var quizChoice5D = document.createElement("p");
  body.appendChild(quizChoice5D);

  quizChoice5D.textContent = "console.log";
  quizChoice5D.addEventListener("click", function () {
    quizChoice5A.remove();
    quizChoice5B.remove();
    quizChoice5C.remove();
    quizChoice5D.remove();
    score += 10;
    endQuiz();
    displayCorrect();
  });

};



// FUNCTION FOR DISPLAYING THE END OF THE QUIZ

function endQuiz() {

  // If time ran out, display the following
  
  if (secondsLeft === 0) {

    quizQuestion.textContent = "Sorry! Time's up!";

    var restartQuiz = document.createElement("form");
    body.appendChild(restartQuiz);

    var quizInstructions = document.createElement("p");
    quizInstructions.innerHTML = "You ran out of time! <br> If you'd like to try again, restart the quiz with the button below.";
    restartQuiz.appendChild(quizInstructions);
    
    var restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartQuiz.appendChild(restartBtn);
  

  // Else ask the user to enter their initials

  } else {
    
    quizQuestion.textContent = "All done!";
  
    var finalScore = document.createElement("div");
    finalScore.textContent = "Your final score is " + score;
    body.appendChild(finalScore);
    console.log("Final score is: " + score);
  
  
    var initialForm = document.createElement("form");
    body.appendChild(initialForm);
  
    var initialText = document.createElement("label");
    initialText.setAttribute("class", "initials");
    initialText.textContent = "Enter initials: ";
    initialForm.appendChild(initialText);
  
  
    var inputInitials = document.createElement("input");
    inputInitials.setAttribute("type", "text");
    initialForm.appendChild(inputInitials);
  
  
    var initialsBtn = document.createElement("button");
    initialsBtn.textContent = "Submit";
    initialForm.appendChild(initialsBtn);
  
  
    initialsBtn.addEventListener("click", function(event) {
      
      event.preventDefault();
  
      localStorage.setItem("recentScore", score);
    
      console.log(event);
      
      console.log("Score submitted");
  
    });

  }
     
};

