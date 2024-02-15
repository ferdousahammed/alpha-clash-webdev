function addClassById(elementID, ...className) {
  for (const i of className) {
    document.getElementById(elementID).classList.add(i);
  }
}
function removeClassById(elementID, ...className) {
  for (const i of className) {
    document.getElementById(elementID).classList.remove(i);
  }
}

function getInnerTextById(elementID) {
  return document.getElementById(elementID).innerText;
}

function randomAlphabetGenerate() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomNumber = Math.round(Math.random() * 25);
  const randomAlphabet = alphabets[randomNumber];
  return randomAlphabet;
}
