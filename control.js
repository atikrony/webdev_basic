function diceRandom() {
  var x = Math.floor(Math.random() * 6) + 1;
  var diceImg = document.querySelector(".container img");
  diceImg.src = "assets/dice-" + x + ".png";
}

document.getElementById("roll-btn").addEventListener("click", function () {
  const diceNumber = Math.floor(Math.random() * 6) + 1;
  document.getElementById("dice-img").src = `assets/dice-${diceNumber}.png`;
});
