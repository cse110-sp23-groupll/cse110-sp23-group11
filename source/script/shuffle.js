/** @type {card[]} */
var cardsData = [
    {name: "Death", 
    src0: "assets/UniformResolution/Death.png",
    src1: "assets/UniformResolution/DeathReversed.png",
    direc: 0},
    {name: "Judgement", 
    src0: "./assets/UniformResolution/Judgement.png",
    src1: "assets/UniformResolution/JudgementReversed.png",
    direc: 0},
    {name: "Justice", 
    src0: "./assets/UniformResolution/Justice.png",
    src1: "assets/UniformResolution/JusticeReversed.png",
    direc: 0},
    {name: "Strength", 
    src0: "./assets/UniformResolution/Strength.png",
    src1: "assets/UniformResolution/StrengthReversed.png",
    direc: 0},
    {name: "WheelOfFortune", 
    src0: "./assets/UniformResolution/WheelOfFortune.png",
    src1: "assets/UniformResolution/WheelOfFortuneReversed.png",
    direc: 0},
    {name: "TheWorld", 
    src0: "./assets/UniformResolution/TheWorld.png",
    src1: "assets/UniformResolution/TheWorldReversed.png",
    direc: 0},
    {name: "TheTower", 
    src0: "./assets/UniformResolution/TheTower.png",
    src1: "assets/UniformResolution/TheTowerReversed.png",
    direc: 0},
    {name: "TheSun", 
    src0: "./assets/UniformResolution/TheSun.png",
    src1: "assets/UniformResolution/TheSunReversed.png",
    direc: 0},
    {name: "TheStar", 
    src0: "./assets/UniformResolution/TheStar.png",
    src1: "assets/UniformResolution/TheStarReversed.png",
    direc: 0},
    {name: "TheMoon", 
    src0: "./assets/UniformResolution/TheMoon.png",
    src1: "assets/UniformResolution/TheMoonReversed.png",
    direc: 0},
    {name: "TheMagician", 
    src0: "./assets/UniformResolution/TheMagician.png",
    src1: "assets/UniformResolution/TheMagicianReversed.png",
    direc: 0},
    {name: "TheHighPriestess", 
    src0: "./assets/UniformResolution/TheHighPriestess.png",
    src1: "assets/UniformResolution/TheHighPriestessReversed.png",
    direc: 0},
    {name: "TheHierophant", 
    src0: "./assets/UniformResolution/TheHierophant.png",
    src1: "assets/UniformResolution/TheHierophantReversed.png",
    direc: 0},
    {name: "TheHermit", 
    src0: "./assets/UniformResolution/TheHermit.png",
    src1: "assets/UniformResolution/TheHermitReversed.png",
    direc: 0},
    {name: "TheEmpress", 
    src0: "./assets/UniformResolution/TheEmpress.png",
    src1: "assets/UniformResolution/TheEmpressReversed.png",
    direc: 0},
    {name: "TheFool", 
    src0: "./assets/UniformResolution/TheFool.png",
    src1: "assets/UniformResolution/TheFoolReversed.png",
    direc: 0},
    {name: "TheEmperor", 
    src0: "./assets/UniformResolution/TheEmperor.png",
    src1: "assets/UniformResolution/TheEmperorReversed.png",
    direc: 0},
    {name: "TheDevil", 
    src0: "./assets/UniformResolution/TheDevil.png",
    src1: "assets/UniformResolution/TheDevilReversed.png",
    direc: 0},
    {name: "Temperance", 
    src0: "./assets/UniformResolution/Temperance.png",
    src1: "assets/UniformResolution/TemperanceReversed.png",
    direc: 0},
    {name: "TheChariot", 
    src0: "./assets/UniformResolution/TheChariot.png",
    src1: "assets/UniformResolution/TheChariotReversed.png",
    direc: 0},
    {name: "TheLovers", 
    src0: "./assets/UniformResolution/TheLovers.png",
    src1: "assets/UniformResolution/TheLoversReversed.png",
    direc: 0},
    {name: "TheHangedMan", 
    src0: "./assets/UniformResolution/TheHangedMan.png",
    src1: "assets/UniformResolution/TheHangedManReversed.png",
    direc: 0},
];

/** @type {int} */
var cardDraw = 0;

window.onload = function() {
    shuffle(cardsData);
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
      var front = cards[i].querySelector(".back");
      front.dataset.name = cardsData[i].name;
      let redomDirec = Math.floor(Math.random() * 2);
      if (redomDirec == 0) front.src = cardsData[i].src0;
      else {
        front.src = cardsData[i].src1;
        cardsData[i].direc = 1;
      }
      cards[i].addEventListener("click", function() {
          // once user clicks a card, it cannot be unflipped
          if (!this.classList.contains("flipped")) {
            this.classList.toggle("flipped");
            if (cardDraw < 2) {
              //store drawCard Result in localStorage
              cardDraw++;
            }
            else {
              //when have 3 card. record result and jump to interptation page
              //store 3rd card in local storage
              //
              //pop up
              setTimeout(() => {
                var confirmPopup = confirm('You drew 3 cards. Do you want to go to the interpretation page?');
                if (confirmPopup) {
                  window.location.href = 'interpretation.html';
                } else {
                  location.reload();
                }
              }, 500);
            } 
          }
      });
    }
    var shuffleButton = document.getElementById("shuffleButton");
    if(shuffleButton){
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

}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  cardDraw = 0;// when shuffle, reset number of card draw.
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
}

function cardSelect(){
    
}