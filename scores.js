var highScoresList = document.getElementById("highscores");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

var scoreItem;

if (highScores.length === 0) {
    var noScores = document.createElement("p");
    noScores.setAttribute("class", "no-scores");
    highScoresList.appendChild(noScores);
    noScores.textContent = "No high scores yet!";

} else {

    highScores.forEach(element => {
        var scoreItem = document.createElement("li");
        scoreItem.setAttribute("class", "high-score");
        highScoresList.appendChild(scoreItem);
        scoreItem.innerHTML = "Player: <strong>" + element.name + "</strong> - Score: <strong>" + element.score + "</strong>";
    });
}


var clearBtn = document.getElementById("clearscores");

clearBtn.addEventListener("click", function () {
    localStorage.clear();

    var allScores = document.querySelectorAll("li");

    for (let i = 0; i < allScores.length; i++) {
        const element = allScores[i];
        element.remove();
    }

    // if (highScores.length === 0) {
    //     var noScores = document.createElement("p");
    //     noScores.setAttribute("class", "no-scores");
    //     highScoresList.appendChild(noScores);
    //     noScores.textContent = "No high scores yet!";

});