function removeElementById(elementID) {
  document.getElementById(elementID).classList.add("hidden");
}
function showElementById(elementID) {
  document.getElementById(elementID).classList.remove("hidden");
}

function randomAlphabetGenerate() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomNumber = Math.round(Math.random() * 25);
  const randomAlphabet = alphabets[randomNumber];
  return randomAlphabet;
}
