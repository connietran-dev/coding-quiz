// So long as quiz has not reached the end, keep isQuizComplete false
var isQuizComplete = false;

// SET THE TIMER
var timeEl = document.querySelector(".time");

var secondsLeft = 60;

var timerInterval;


function setTime() {

  var timerInterval = setInterval(function () {

    // If the quiz has not yet ended and there is still time on the clock, continue to show the time and subtract 1 each 1 second 
    if (secondsLeft >= 0 && isQuizComplete === false) {

    timeEl.textContent = "Time: " + secondsLeft;

    secondsLeft--;

    };


    // Format the secondsLeft when they are a single digit
    if (secondsLeft <= 9) {

      timeEl.textContent = "Time: 0" + secondsLeft;

    }

    // If player ran out of time before quiz ended (due to time or wrong answers), tell them time's up
    if (secondsLeft <= 0 && isQuizComplete === false) {

      // Format the secondsLeft are negative because user clicked wrong answer, simply display 0
      timeEl.textContent = "Time: 0";

      clearInterval(timerInterval);

      quizQuestion.textContent = "Sorry! Time's up!";

      console.log("time's up");

      // Remove answers from screen
      var allAnswers = document.querySelectorAll("p");
      for (let i = 0; i < allAnswers.length; i++) {
        const element = allAnswers[i];
        element.remove();
      };

      var restartQuiz = document.createElement("form");
      body.appendChild(restartQuiz);
  
      var quizInstructions = document.createElement("p");
      quizInstructions.innerHTML = "You ran out of time! <br> If you'd like to try again, restart the quiz with the button below.";
      restartQuiz.appendChild(quizInstructions);
      
      // Refresh to take user to beginning
      var restartBtn = document.createElement("button");
      restartBtn.textContent = "Restart Quiz";
      restartQuiz.appendChild(restartBtn);

    }
  }, 1000);
};




var body = document.body;

var score = 0;

// Create elements for quiz questions
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






// FUNCTIONS FOR DISPLAYING CORRECT OR WRONG RESULTS

function displayCorrect() {

  console.log("Current score: " + score);

  // Create divs for result from last question after next question is run (see runXQuestion() functions)
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

  secondsLeft -= 10;

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




// Functions for the end of the quiz start around line 540


// DISPLAY FIRST QUESTION


function runFirstQuestion() {

  // Set the text content of trivia question
  quizQuestion.textContent = "Commonly used data types DO NOT include:";


  // Create HTML elements for answer choices
  // On click, run second question and display result

  // Answer choice A
  var quizChoiceA = document.createElement("p");
  body.appendChild(quizChoiceA);

  quizChoiceA.textContent = "1. strings";
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

  quizChoiceB.textContent = "2. booleans";
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

  quizChoiceC.textContent = "3. alerts";
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

  quizChoiceD.textContent = "4. numbers";
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

  quizChoice2A.textContent = "1. quotes";
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

  quizChoice2B.textContent = "2. curly brackets";
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

  quizChoice2C.textContent = "3. parentheses";
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

  quizChoice2D.textContent = "4. square brackets";
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

  quizChoice3A.textContent = "1. numbers and strings";
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

  quizChoice3B.textContent = "2. other arrays";
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

  quizChoice3C.textContent = "3. booleans";
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

  quizChoice3D.textContent = "4. all of the above";
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

  quizChoice4A.textContent = "1. commas";
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

  quizChoice4B.textContent = "2. curly brackets";
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

  quizChoice4C.textContent = "3. quotes";
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

  quizChoice4D.textContent = "4. parentheses";
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

  quizChoice5A.textContent = "1. Javascript";
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

  quizChoice5B.textContent = "2. terminal/bash";
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

  quizChoice5C.textContent = "3. for loops";
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

  quizChoice5D.textContent = "4. console.log";
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

var inputInitials;

function endQuiz() {

    // When user succesfully completes last question, set to true
    isQuizComplete = true;

    timeEl.textContent = "Time: 0";

    clearInterval(timerInterval);

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


    inputInitials = document.createElement("input");
    inputInitials.setAttribute("type", "text");
    initialForm.appendChild(inputInitials);


    var initialsBtn = document.createElement("a");
    initialsBtn.innerHTML = "<button>Submit</button>";
    initialsBtn.setAttribute("href", "scores.html");
    initialForm.appendChild(initialsBtn);


    initialsBtn.addEventListener("click", function (event) {

      saveHighScore();

      console.log("Score submitted");

    });

};



// FUNCTION TO SAVE HIGH SCORE

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log("Current high scores: " + highScores);

var playerEntry;


function saveHighScore() {

  // Create playerEntry object
  var playerEntry = {
    name: inputInitials.value,
    score: score,
  };

  // Add playerEntry onto highScores array
  highScores.push(playerEntry);

  console.log(inputInitials.value);
  console.log(playerEntry);
  console.log(highScores);

  // If next score is higher than the first, sort it first
  highScores.sort((first, next) => {
    return next.score - first.score;
  })

  // Only store the top 3 scores
  highScores.splice(3);

  // Store highScores array in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));


};

