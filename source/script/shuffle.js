var cardsData = [
    {name: "Death", src: "assets/UniformResolution/Death.png"},
    {name: "Judgement", src: "./assets/UniformResolution/Judgement.png"},
    {name: "Justice", src: "./assets/UniformResolution/Justice.png"},
    {name: "Strength", src: "./assets/UniformResolution/Strength.png"},
    {name: "WheelOfFortune", src: "./assets/UniformResolution/WheelOfFortune.png"},
    {name: "TheWorld", src: "./assets/UniformResolution/TheWorld.png"},
    {name: "TheTower", src: "./assets/UniformResolution/TheTower.png"},
    {name: "TheSun", src: "./assets/UniformResolution/TheSun.png"},
    {name: "TheStar", src: "./assets/UniformResolution/TheStar.png"},
    {name: "TheMoon", src: "./assets/UniformResolution/TheMoon.png"},
    {name: "TheMagician", src: "./assets/UniformResolution/TheMagician.png"},
    {name: "TheHighPriestess", src: "./assets/UniformResolution/TheHighPriestess.png"},
    {name: "TheHierophant", src: "./assets/UniformResolution/TheHierophant.png"},
    {name: "TheHermit", src: "./assets/UniformResolution/TheHermit.png"},
    {name: "TheEmpress", src: "./assets/UniformResolution/TheEmpress.png"},
    {name: "TheFool", src: "./assets/UniformResolution/TheFool.png"},
    {name: "TheEmperor", src: "./assets/UniformResolution/TheEmperor.png"},
    {name: "TheDevil", src: "./assets/UniformResolution/TheDevil.png"},
    {name: "Temperance", src: "./assets/UniformResolution/Temperance.png"},
    {name: "TheChariot", src: "./assets/UniformResolution/TheChariot.png"},
    {name: "TheLovers", src: "./assets/UniformResolution/TheLovers.png"},
    {name: "TheHangedMan", src: "./assets/UniformResolution/TheHangedMan.png"},
];

window.onload = function() {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
    }
    var shuffleButton = document.getElementById("shuffleButton");
    shuffleButton.addEventListener("click", function() {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("flipped");
      }
      shuffle(cardsData);
      for (var i = 0; i < cards.length; i++) {
          var front = cards[i].querySelector(".back");
          front.dataset.name = cardsData[i].name;
          front.src = cardsData[i].src;
      }            
    });
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
}