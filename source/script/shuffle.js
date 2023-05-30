var cardsData = [
    {name: "death", src: "assets/FinishedTarotCards/DeathTarotCard.png"},
    {name: "judgement", src: "./assets/FinishedTarotCards/JudgementTarotCard.png"},
    {name: "justice", src: "./assets/FinishedTarotCards/JusticeTarotCard.png"},
    {name: "strength", src: "./assets/FinishedTarotCards/StrengthTarotCard.png"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
    {name: "Card Name 21", src: "path-to-front-image21"},
    {name: "Card Name 22", src: "path-to-front-image22"},
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