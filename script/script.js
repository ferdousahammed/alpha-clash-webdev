console.log("connected");

const audio = new Audio();

function changeScreenColor(updatedLife) {
  const screenElement = document.getElementById("screen");
  screenElement.style.background = `linear-gradient(#ffffffb3  ${
    updatedLife * 20
  }%, red)`;
}

function continueGame() {
  setTimeout(() => {
    addClassById("notification", "hidden");
  }, 3000);
  const randomAlphabetElement = document.getElementById("random-alpha");
  document.addEventListener("keyup", handleKeyboardPress);
  const randomAlphabet = randomAlphabetGenerate();
  randomAlphabetElement.innerText = randomAlphabet.toUpperCase();
  addClassById(randomAlphabet, "bg-amber-500", "text-white");
}
function timeOut() {
  let timeLeft = 10;
  setInterval(function () {
    getInnerTextById("random-alpha");
    if (timeLeft <= 0) {
      clearInterval();
    }
    document.getElementById("progress").value = 10 - timeLeft;
    timeLeft -= 1;
  }, 1000);
}
function play() {
  isPlayMode = true;
  addClassById("home-screen", "hidden");
  removeClassById("game-screen", "hidden");
  continueGame();
}

function playAgain() {
  addClassById("result-screen", "hidden");
  removeClassById("game-screen", "hidden");
  removeClassById("notification", "hidden");
  document.getElementById("score-point").innerText = 0;
  document.getElementById("life-point").innerText = 5;
  changeScreenColor(5);
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
  console.log("Player Pressed ", e.key);
  if (currentAlphabet === e.key) {
    audio.src = "../audio/right.mp3";
    audio.play();
    console.log("Success!!! Right key pressed");
    const currentScore = getInnerTextById("score-point");
    const updatedScore = parseInt(currentScore) + 1;
    document.getElementById("score-point").innerText = updatedScore;
    removeClassById(currentAlphabet, "bg-amber-500", "text-white");
    continueGame();
  } else if (e.key === "Escape") {
    gameOver();
  } else {
    audio.src = "../audio/wrong.wav";
    audio.play();
    console.log("Wrong key Pressed.");
    const currentLife = getInnerTextById("life-point");
    const updatedLife = parseInt(currentLife) - 1;
    changeScreenColor(updatedLife);
    document.getElementById("life-point").innerText = updatedLife;
    // removeClassById(currentAlphabet, "bg-amber-500", "text-white");
    if (updatedLife == 0) {
      gameOver();
    }
  }
}
