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



// Display first question


var quizChoiceA;
var quizChoiceB;
var quizChoiceC;
var quizChoiceD;


function runFirstQuestion() {

  // Set the text content of trivia question and choices
  quizQuestion.textContent = "Commonly used data types DO NOT include:";

  // var quizChoices = document.createElement("form");
  // body.appendChild(quizChoices);

  // quizChoices.innerHTML = '<div class="choice"><input type="radio" id="strings" name="question1" value="string"><label for="strings">strings</label></div><br>  <div class="choice"><input type="radio" id="booleans" name="question1" value="booleans"><label for="booleans">booleans</label></div><br><div class="choice"><input type="radio" id="alerts" name="question1" value="alerts"><label for="alerts">alerts</label></div><br><div class="choice"><input type="radio" id="numbers" name="question1" value="numbers"><label for="numbers">numbers</label></div><br><button>Next</button>';


  var quizChoiceA = document.createElement("p");
  quizChoiceA.setAttribute("class", "choiceA");
  quizChoiceA.textContent = "strings";
  body.appendChild(quizChoiceA);

  var quizChoiceB = document.createElement("p");
  quizChoiceB.setAttribute("class", "choiceB");
  quizChoiceB.textContent = "booleans";
  body.appendChild(quizChoiceB);

  var quizChoiceC = document.createElement("p");
  quizChoiceC.setAttribute("class", "choiceC");
  quizChoiceC.textContent = "alert";
  body.appendChild(quizChoiceC);

  var quizChoiceD = document.createElement("p");
  quizChoiceD.setAttribute("class", "choiceD");
  quizChoiceD.textContent = "numbers";
  body.appendChild(quizChoiceD);

  var quizNext = document.createElement("button");
  quizNext.setAttribute("id", "next");
  quizNext.textContent = "Next";
  body.appendChild(quizNext);

};


var quizChoiceA = document.querySelector(".choiceA");

quizChoiceA.addEventListener("click", function(event) {
  console.log("clicked");
  // runSecondQuestion();
});




// var nextQuiz = document.querySelector("#next");

// nextQuiz.addEventListener("click", function(event) {
//   event.preventDefault();
//   console.log("clicked");
//   runSecondQuestion();
// });


// var quizNext = document.querySelector("#next");


// quizNext.addEventListener("click", function() {
//   console.log("clicked");
//   runSecondQuestion();
// });



// // runSecondQuestion() on click of quiz choice

// var quizChoices = document.querySelectorAll("p");


// quizChoices.addEventListener("click", function() {
//   console.log("clicked");

// });

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

// quizChoices.innerHTML = "<li>quotes</li><li>curly brackets</li><li>parentheses</li><li>square brackets</li>";

};