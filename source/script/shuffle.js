/** @type {card[]} */
var cardsData = [
    {name: "Death", 
    src0: "./assets/UniformResolution/Death.png",
    src1: "./assets/UniformResolution/DeathReversed.png",
    direc: 0},
    {name: "Judgement", 
    src0: "./assets/UniformResolution/Judgement.png",
    src1: "./assets/UniformResolution/JudgementReversed.png",
    direc: 0},
    {name: "Justice", 
    src0: "./assets/UniformResolution/Justice.png",
    src1: "./assets/UniformResolution/JusticeReversed.png",
    direc: 0},
    {name: "Strength", 
    src0: "./assets/UniformResolution/Strength.png",
    src1: "./assets/UniformResolution/StrengthReversed.png",
    direc: 0},
    {name: "WheelOfFortune", 
    src0: "./assets/UniformResolution/WheelOfFortune.png",
    src1: "./assets/UniformResolution/WheelOfFortuneReversed.png",
    direc: 0},
    {name: "TheWorld", 
    src0: "./assets/UniformResolution/TheWorld.png",
    src1: "./assets/UniformResolution/TheWorldReversed.png",
    direc: 0},
    {name: "TheTower", 
    src0: "./assets/UniformResolution/TheTower.png",
    src1: "./assets/UniformResolution/TheTowerReversed.png",
    direc: 0},
    {name: "TheSun", 
    src0: "./assets/UniformResolution/TheSun.png",
    src1: "./assets/UniformResolution/TheSunReversed.png",
    direc: 0},
    {name: "TheStar", 
    src0: "./assets/UniformResolution/TheStar.png",
    src1: "./assets/UniformResolution/TheStarReversed.png",
    direc: 0},
    {name: "TheMoon", 
    src0: "./assets/UniformResolution/TheMoon.png",
    src1: "./assets/UniformResolution/TheMoonReversed.png",
    direc: 0},
    {name: "TheMagician", 
    src0: "./assets/UniformResolution/TheMagician.png",
    src1: "./assets/UniformResolution/TheMagicianReversed.png",
    direc: 0},
    {name: "TheHighPriestess", 
    src0: "./assets/UniformResolution/TheHighPriestess.png",
    src1: "./assets/UniformResolution/TheHighPriestessReversed.png",
    direc: 0},
    {name: "TheHierophant", 
    src0: "./assets/UniformResolution/TheHierophant.png",
    src1: "./assets/UniformResolution/TheHierophantReversed.png",
    direc: 0},
    {name: "TheHermit", 
    src0: "./assets/UniformResolution/TheHermit.png",
    src1: "./assets/UniformResolution/TheHermitReversed.png",
    direc: 0},
    {name: "TheEmpress", 
    src0: "./assets/UniformResolution/TheEmpress.png",
    src1: "./assets/UniformResolution/TheEmpressReversed.png",
    direc: 0},
    {name: "TheFool", 
    src0: "./assets/UniformResolution/TheFool.png",
    src1: "./assets/UniformResolution/TheFoolReversed.png",
    direc: 0},
    {name: "TheEmperor", 
    src0: "./assets/UniformResolution/TheEmperor.png",
    src1: "./assets/UniformResolution/TheEmperorReversed.png",
    direc: 0},
    {name: "TheDevil", 
    src0: "./assets/UniformResolution/TheDevil.png",
    src1: "./assets/UniformResolution/TheDevilReversed.png",
    direc: 0},
    {name: "Temperance", 
    src0: "./assets/UniformResolution/Temperance.png",
    src1: "./assets/UniformResolution/TemperanceReversed.png",
    direc: 0},
    {name: "TheChariot", 
    src0: "./assets/UniformResolution/TheChariot.png",
    src1: "./assets/UniformResolution/TheChariotReversed.png",
    direc: 0},
    {name: "TheLovers", 
    src0: "./assets/UniformResolution/TheLovers.png",
    src1: "./assets/UniformResolution/TheLoversReversed.png",
    direc: 0},
    {name: "TheHangedMan", 
    src0: "./assets/UniformResolution/TheHangedMan.png",
    src1: "./assets/UniformResolution/TheHangedManReversed.png",
    direc: 0},
];

//initialize an array to store selected card
var selectedCards = [];
var drawCardResult = [];

window.onload = function() {
  shuffle(cardsData);
  //initialize card data
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    var front = cards[i].querySelector(".back");
    var cardId = cardsData[i].name;//get what card it is

    front.dataset.name = cardsData[i].name;
    let randomDirec = Math.floor(Math.random() * 2);

    if (randomDirec === 0) {
      front.src = cardsData[i].src0;// if this number is 0, card is not reversed
    } else {
      front.src = cardsData[i].src1;//otherwise card is reversed
      cardsData[i].direc = 1;
    }

    cards[i].addEventListener("click", function() {
      var currentCard = this;

      if (!currentCard.classList.contains("flipped") && selectedCards.length < 3) {
        currentCard.classList.add("flipped");
        selectedCards.push(currentCard);

        // Store drawCard result in localStorage
        var cardData = {
          card: cardId,
          reversed: randomDirec
        };
        drawCardResult.push(cardData);

        if (selectedCards.length === 3) {
          setTimeout(function() {


            // Show pop-up
            //add a time out so the flip get excuted before pop up
            var confirmPopup = confirm('You drew 3 cards. Do you want to go to the interpretation page?');
            if (confirmPopup) {
              var drawCardResultJSON = JSON.stringify(drawCardResult);
              // Store drawCardResultJSON in localStorage
              localStorage.setItem("drawCardResult", drawCardResultJSON);
              window.location.href = 'interpretation.html';
            } else {
              location.reload();
            }
          },500);
        }
      } 
      // if allow deselect card
      // else if (currentCard.classList.contains("flipped")) {
      //   currentCard.classList.remove("flipped");
      //   selectedCards = selectedCards.filter(function(card) {
      //     return card !== currentCard;
      //   });
      // }
    });
  }
  //the button would shuffle the card deck
  var shuffleButton = document.getElementById("shuffleButton");
  if (shuffleButton) {
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

// shuffle card function
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  cardDraw = 0;// when shuffle, reset number of card draw.
  selectedCards = [];
  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
}