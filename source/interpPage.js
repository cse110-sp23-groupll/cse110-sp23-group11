import cardData from "./cards.json" assert { type: 'json' } // Card json information
import interpData from "./interpretations.json" assert { type: 'json'} // Overall interpretation JSON information

const cards = document.querySelectorAll(".card");

setCardProp();

cards.forEach(card => card.addEventListener("click", flipCard));

// Exit page button redirects to the welcome page
const exitButton = (document.getElementsByClassName("exit"))[0];
exitButton.addEventListener('click', () => {
  location.href = "welcome.html";
  localStorage.clear();
})

// New reading button redirects to the card selection page
const newReadingButton = (document.getElementsByClassName("newReading"))[0];
newReadingButton.addEventListener('click', () => {
  location.href = "card-page.html";
  localStorage.clear();
})

// Expand the page for recipe content
const expandButton = document.getElementById('expand-btn');
const content = document.getElementById('content');

expandButton.addEventListener('click', () => {
  content.classList.toggle('show-content');
  
  if (content.classList.contains('show-content')) {
    const buttonOffsetTop = expandButton.offsetTop;
    const scrollHeight = content.offsetTop - buttonOffsetTop + 400;
    
    window.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  }
});

/**
 * Pulls JSON card strings from localStorage and parses them for use in updating card information
 * @returns {Array<String>} names of cards selected by the user
 */
function getCardNamesFromLS() {
  let selectedCards = [localStorage.getItem("past"), localStorage.getItem("present"), localStorage.getItem("future")];
  let names = [];
  
  for (const card of selectedCards) {
    const cardJSON = JSON.parse(card);
    if (cardJSON["reversed"] == 1) {
      names.push(cardJSON["Name"] + " (Reversed)")
    } else {
      names.push(cardJSON["Name"]);
    }
  }

  return names;
}

/**
 * Sets card information using past, present, and future information
 */
function setCardProp() {
  let cardsSelected = getCardNamesFromLS();
  let finalInterp = document.querySelector('h2');

  for (let i = 0; i < cards.length; i++) {
    const name = cardsSelected[i];

    const cardImg = cards[i].querySelector('img');
    const backCard = cards[i].querySelector('.card-back');

    // Sets the image and name for the front side of the card
    cards[i].querySelector('h3').innerText = name;
    cardImg.src = cardData[0][name]["Source"]
    cardImg.alt = "Image for " + name;

    // Sets information of the back side of the card
    backCard.querySelector('h3').innerText = name;
    backCard.querySelector('h4').innerText = cardData[0][name]["Description"];
    backCard.querySelector('p').innerText = cardData[0][name]["Interpretation"];
  }

  // Overall interpretation randomized using the values of the cards selected
  // If page refreshed (meaning localStorage info is as is), reuse old interpretation
  if (localStorage.getItem("interpretation") == null) {
    finalInterp.innerText = randomInterp(cardsSelected);
  } else {
    finalInterp.innerText = localStorage.getItem("interpretation");
  }
}

/**
 * Returns a random interpretation given the values of the cards which determine how positive/negative a fortune will be
 * @param {Array<String>} cardNames A list of the names of the cards chosen by the user
 * @returns {String} A random interpretation given the sum of the values
 */

function randomInterp(cardNames) {
  let total = 0;
  
  // Sums up the card values
  for (const name of cardNames) {
    total += cardData[0][name]["Value"];
  }

  // Picks one of 5 possible interpretations for that sum combination
  let randomChoice = Math.floor(Math.random() * 5) + 1;

  // Store interpretation in local storage for later use
  let interpretation = interpData[0][total.toString()]["Interpretation" + randomChoice];
  localStorage.setItem("interpretation", interpretation)

  return interpretation;
}

/**
 * Flips the card to reveal the other side with the relevant information (front side for picture and name, back side for description and interpretation info)
 */
function flipCard() {
  this.classList.toggle("is-flipped");
}
