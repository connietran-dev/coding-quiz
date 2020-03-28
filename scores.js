var highScoresList = document.getElementById("highscores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);


// highScores.forEach(element => {
//     console.log(highScores[0]);    
// });


highScores.forEach(element => {
    var scoreItem = document.createElement("li");
    highScoresList.appendChild(scoreItem);
    scoreItem.innerText = "Player: " + playerEntry.name + " Score: " + playerEntry.score;
});