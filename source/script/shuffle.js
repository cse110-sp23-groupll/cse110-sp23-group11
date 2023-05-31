var cardsData = [
    {name: "Death", src: "assets/FinishedTarotCards/DeathTarotCard.png"},
    {name: "Judgement", src: "./assets/FinishedTarotCards/JudgementTarotCard.png"},
    {name: "Justice", src: "./assets/FinishedTarotCards/JusticeTarotCard.png"},
    {name: "Strength", src: "./assets/FinishedTarotCards/StrengthTarotCard.png"},
    {name: "WheelOfFortune", src: "./assets/FinishedTarotCards/WheelOfFortuneTarotCard.png"},
    {name: "TheWorld", src: "./assets/FinishedTarotCards/TheWorldTarotCard.png"},
    {name: "TheTower", src: "./assets/FinishedTarotCards/TheTowerTarotCard.png"},
    {name: "TheSun", src: "./assets/FinishedTarotCards/TheSunTarotCard.png"},
    {name: "TheStar", src: "./assets/FinishedTarotCards/TheStarTarotCard.png"},
    {name: "TheMoon", src: "./assets/FinishedTarotCards/TheMoonTarotCard.png"},
    {name: "TheMagician", src: "./assets/FinishedTarotCards/TheMagicianTarotCard.png"},
    {name: "TheHighPriestess", src: "./assets/FinishedTarotCards/TheHighPriestessTarotCard.png"},
    {name: "TheHierophant", src: "./assets/FinishedTarotCards/TheHierophantTarotCard.png"},
    {name: "TheHermit", src: "./assets/FinishedTarotCards/TheHermitTarotCard.png"},
    {name: "TheEmpress", src: "./assets/FinishedTarotCards/TheEmpressTarotCard.png"},
    {name: "TheFool", src: "./assets/FinishedTarotCards/TheFoolTarotCard.png"},
    {name: "TheEmperor", src: "./assets/FinishedTarotCards/TheEmperorTarotCard.png"},
    {name: "TheDevil", src: "./assets/FinishedTarotCards/TheDevilTarotCard.png"},
    {name: "Temperance", src: "./assets/FinishedTarotCards/TemperanceTarotCard.png"},
    {name: "TheChariot", src: "./assets/FinishedTarotCards/TheChariotTarotCard.png"},
    {name: "TheLovers", src: "./assets/FinishedTarotCards/TheLoversTarotCard.png"},
    {name: "TheHangedMan", src: "./assets/FinishedTarotCards/TheHangedManTarotCard.png"},
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