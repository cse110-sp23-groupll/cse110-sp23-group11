/** @type {card[]} */
const cardsData = [
  {name: "Death", 
  src0: "./assets/UniformResolution/Death.png",
  src1: "./assets/UniformResolution/DeathReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "Judgement", 
  src0: "./assets/UniformResolution/Judgement.png",
  src1: "./assets/UniformResolution/JudgementReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "Justice", 
  src0: "./assets/UniformResolution/Justice.png",
  src1: "./assets/UniformResolution/JusticeReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "Strength", 
  src0: "./assets/UniformResolution/Strength.png",
  src1: "./assets/UniformResolution/StrengthReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "Wheel of Fortune", 
  src0: "./assets/UniformResolution/WheelOfFortune.png",
  src1: "./assets/UniformResolution/WheelOfFortuneReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The World", 
  src0: "./assets/UniformResolution/TheWorld.png",
  src1: "./assets/UniformResolution/TheWorldReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Tower", 
  src0: "./assets/UniformResolution/TheTower.png",
  src1: "./assets/UniformResolution/TheTowerReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Sun", 
  src0: "./assets/UniformResolution/TheSun.png",
  src1: "./assets/UniformResolution/TheSunReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Star", 
  src0: "./assets/UniformResolution/TheStar.png",
  src1: "./assets/UniformResolution/TheStarReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Moon", 
  src0: "./assets/UniformResolution/TheMoon.png",
  src1: "./assets/UniformResolution/TheMoonReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Magician", 
  src0: "./assets/UniformResolution/TheMagician.png",
  src1: "./assets/UniformResolution/TheMagicianReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The High Priestess", 
  src0: "./assets/UniformResolution/TheHighPriestess.png",
  src1: "./assets/UniformResolution/TheHighPriestessReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Hierophant", 
  src0: "./assets/UniformResolution/TheHierophant.png",
  src1: "./assets/UniformResolution/TheHierophantReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Hermit", 
  src0: "./assets/UniformResolution/TheHermit.png",
  src1: "./assets/UniformResolution/TheHermitReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Empress", 
  src0: "./assets/UniformResolution/TheEmpress.png",
  src1: "./assets/UniformResolution/TheEmpressReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Fool", 
  src0: "./assets/UniformResolution/TheFool.png",
  src1: "./assets/UniformResolution/TheFoolReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Emperor", 
  src0: "./assets/UniformResolution/TheEmperor.png",
  src1: "./assets/UniformResolution/TheEmperorReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Devil", 
  src0: "./assets/UniformResolution/TheDevil.png",
  src1: "./assets/UniformResolution/TheDevilReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "Temperance", 
  src0: "./assets/UniformResolution/Temperance.png",
  src1: "./assets/UniformResolution/TemperanceReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Chariot", 
  src0: "./assets/UniformResolution/TheChariot.png",
  src1: "./assets/UniformResolution/TheChariotReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Lovers", 
  src0: "./assets/UniformResolution/TheLovers.png",
  src1: "./assets/UniformResolution/TheLoversReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
  {name: "The Hanged Man", 
  src0: "./assets/UniformResolution/TheHangedMan.png",
  src1: "./assets/UniformResolution/TheHangedManReversed.png",
  direc: 0,
  audio: "./assets/audios/flipcard-91468.mp3"
  },
];

//initialize an array to store selected card
let selectedCards = [];
let drawCardResult = [];

window.onload = function() {
shuffle(cardsData);
//initialize card data
const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
  let front = cards[i].querySelector(".back");
  let cardId = cardsData[i].name;//get what card it is

  front.dataset.name = cardsData[i].name;
  let randomDirec = Math.floor(Math.random() * 2);

  if (randomDirec === 0) {
    front.src = cardsData[i].src0;// if this number is 0, card is not reversed
  } else {
    front.src = cardsData[i].src1;//otherwise card is reversed
    cardsData[i].direc = 1;
  }

  cards[i].addEventListener("click", function() {
    let currentCard = this;

    if (!currentCard.classList.contains("flipped") && selectedCards.length < 3) {
      currentCard.classList.add("flipped");
      selectedCards.push(currentCard);

      // Store drawCard result in localStorage
      let cardData = {
        Name: cardId,
        reversed: randomDirec
      };

      drawCardResult.push(cardData);

      if (selectedCards.length === 3) {
        const keys = ["past", "present", "future"];

        for (let j = 0; j < drawCardResult.length; j++) {
          localStorage.setItem(keys[j], JSON.stringify(drawCardResult[j]));
        }
        setTimeout(toInterp, 1000);
      }

      // Play Flip-card sound 
      let audio = new Audio(cardsData[i].audio);
      audio.play();
    } 
  });
}
}

/**
* Switches to interpretation branch
*/
function toInterp() {
// Ensure that the following localStorage items are only cleared after a new reading has been completed
keyItems = ["interpretation", "recipeIndex"];
for (const key of keyItems) {
  if (localStorage.getItem(key) != null) {
    localStorage.removeItem(key)
  }
}
localStorage.setItem("audioPlay", 0);
window.location.href = 'interpretation.html';
}

/**
* Shuffles the cards initially for the user to select from
* @param {card[]} array
*/
function shuffle(array) {
let currentIndex = array.length, temporaryValue, randomIndex;
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
/**
* this is the button to toggle music on or off on the page
* the music is not playing bu default
* @type {audio} the backgroundMusic
* @type {playButton} this toggle button should toggle music on or off
*/
document.addEventListener("DOMContentLoaded", function() {
var audio = document.getElementById("myAudio");
var playButton = document.getElementById("playButton");

if (playButton) {
  playButton.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playIcon.src = "./assets/images/unmute.png";
    } else {
      audio.pause();
      playIcon.src = "./assets/images/mute.png";
    }
  });
}
});

// Click sound
document.addEventListener('DOMContentLoaded', (event) => {
  const exitLink = document.getElementById('exitLink');
  const audio = document.getElementById('buttonAudio');

  exitLink.addEventListener('click', function(event) {
      event.preventDefault();
      audio.play();
      audio.onended = function() {
          window.location.href = exitLink.href;
      };
  });

  
});

