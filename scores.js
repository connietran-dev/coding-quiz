var highScoresList = document.getElementById("highscores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);


highScores.forEach(element => {
    var scoreItem = document.createElement("li");
    scoreItem.setAttribute("class", "high-score");
    highScoresList.appendChild(scoreItem);
    scoreItem.innerHTML = "Player: <strong>" + element.name + "</strong> |   Score: <strong>" + element.score + "</strong>";
});