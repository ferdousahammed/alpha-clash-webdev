console.log("connected");

function continueGame() {
  const randomAlphabetElement = document.getElementById("random-alpha");
  document.addEventListener("keyup", handleKeyboardPress);
  const randomAlphabet = randomAlphabetGenerate();
  randomAlphabetElement.innerText = randomAlphabet.toUpperCase();
  addClassById(randomAlphabet, "bg-amber-500", "text-white");
}

function play() {
  addClassById("home-screen", "hidden");
  removeClassById("game-screen", "hidden");
  continueGame();
}

function playAgain() {
  addClassById("result-screen", "hidden");
  removeClassById("game-screen", "hidden");
  document.getElementById("score-point").innerText = 0;
  document.getElementById("life-point").innerText = 5;
  continueGame();
}

function gameOver() {
  const currentAlphabet = getInnerTextById("random-alpha").toLowerCase();
  removeClassById(currentAlphabet, "bg-amber-500", "text-white");
  addClassById("game-screen", "hidden");
  removeClassById("result-screen", "hidden");
  document.getElementById("final-score").innerText =
    getInnerTextById("score-point");
}
function handleKeyboardPress(e) {
  const currentAlphabet = getInnerTextById("random-alpha").toLowerCase();
  if (currentAlphabet === e.key) {
    const currentScore = getInnerTextById("score-point");
    const updatedScore = parseInt(currentScore) + 1;
    document.getElementById("score-point").innerText = updatedScore;
    removeClassById(currentAlphabet, "bg-amber-500", "text-white");
    continueGame();
  } else if (e.key === "Escape") {
    gameOver();
  } else {
    const currentLife = getInnerTextById("life-point");
    const updatedLife = parseInt(currentLife) - 1;
    document.getElementById("life-point").innerText = updatedLife;
    // removeClassById(currentAlphabet, "bg-amber-500", "text-white");
    if (updatedLife == 0) {
      gameOver();
    }
  }
}
