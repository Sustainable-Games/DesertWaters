const ctx = document.getElementById("map-canvas").getContext("2d");
const img = new Image();
const turnMeter = document.getElementById("turn-meter");
const endTurnButton = document.getElementById("end-turn-button");

var gameYear = 2025;

img.addEventListener("load", () => {
  ctx.drawImage(img, 0, 0);
});

img.src = "img/Arizona_relief_map.png";

function init() {
    turnMeter.value = gameYear;
}

function endTurn() {
    gameYear++;
    turnMeter.value = gameYear;

    if (gameYear >= 2050) {
        gameOver();
    }
}

function gameOver() {
    console.log("Game over!");
}

endTurnButton.addEventListener("click", endTurn);