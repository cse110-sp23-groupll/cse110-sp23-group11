var cardsData = [
    {name: "Death", 
    src0: "assets/UniformResolution/Death.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "Judgement", 
    src0: "./assets/UniformResolution/Judgement.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "Justice", 
    src0: "./assets/UniformResolution/Justice.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "Strength", 
    src0: "./assets/UniformResolution/Strength.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "WheelOfFortune", 
    src0: "./assets/UniformResolution/WheelOfFortune.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheWorld", 
    src0: "./assets/UniformResolution/TheWorld.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheTower", 
    src0: "./assets/UniformResolution/TheTower.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheSun", 
    src0: "./assets/UniformResolution/TheSun.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheStar", 
    src0: "./assets/UniformResolution/TheStar.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheMoon", 
    src0: "./assets/UniformResolution/TheMoon.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheMagician", 
    src0: "./assets/UniformResolution/TheMagician.png",
    src1: "assets/UniformResolution/Death.png",
    direc: 0},
    {name: "TheHighPriestess", src0: "./assets/UniformResolution/TheHighPriestess.png"},
    {name: "TheHierophant", src0: "./assets/UniformResolution/TheHierophant.png"},
    {name: "TheHermit", src0: "./assets/UniformResolution/TheHermit.png"},
    {name: "TheEmpress", src0: "./assets/UniformResolution/TheEmpress.png"},
    {name: "TheFool", src0: "./assets/UniformResolution/TheFool.png"},
    {name: "TheEmperor", src0: "./assets/UniformResolution/TheEmperor.png"},
    {name: "TheDevil", src0: "./assets/UniformResolution/TheDevil.png"},
    {name: "Temperance", src0: "./assets/UniformResolution/Temperance.png"},
    {name: "TheChariot", src0: "./assets/UniformResolution/TheChariot.png"},
    {name: "TheLovers", src0: "./assets/UniformResolution/TheLovers.png"},
    {name: "TheHangedMan", src0: "./assets/UniformResolution/TheHangedMan.png"},
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
          let redomDirec = Math.floor(Math.random() * 2);
          if (redomDirec == 0) front.src = cardsData[i].src0;
          else {
            front.src = cardsData[i].src1;
            cardsData[i].direc = 1;
          }
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