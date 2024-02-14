console.log("connected");

function play() {
  removeElementById("home-screen");
  showElementById("game-screen");
  continueGame();
}

function continueGame() {
  const randomAlphabetElement = document.getElementById("random-alpha");
  const randomAlphabet = randomAlphabetGenerate();
  randomAlphabetElement.innerText = randomAlphabet.toLocaleUpperCase();
  document
    .getElementById(randomAlphabet)
    .classList.add("bg-amber-500", "text-white");
}
