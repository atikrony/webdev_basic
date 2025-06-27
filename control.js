function diceRandom() {
  var x = Math.floor(Math.random() * 6) + 1;
  var diceImg = document.querySelector(".container img");
  diceImg.src = "assets/dice-" + x + ".png";
}
