// Flip cards
import cardData from "./cards.json" assert { type: 'json' }
import interpData from "./interpretations.json" assert { type: 'json'}

const cards = document.querySelectorAll(".card");

/**
 * Pulls JSON card strings from localStorage and parses them for use in updating card information
 */
function getCardNamesFromLS() {
  let selectedCards = [localStorage.getItem("past"), localStorage.getItem("present"), localStorage.getItem("future")];
  let names = [];
  
  for (const card of selectedCards) {
    names.push((JSON.parse(card))["Name"]);
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
    cards[i].querySelector('h3').innerText = name;
    cardImg.src = cardData[0][name]["Source"]
    cardImg.alt = "Image for " + name;
    backCard.querySelector('h3').innerText = name;
    backCard.querySelector('h4').innerText = cardData[0][name]["Description"];
    backCard.querySelector('p').innerText = cardData[0][name]["Interpretation"];
  }

  finalInterp.innerText = randomInterp(cardsSelected);
  
}

/**
 * Returns a random interpretation given the values of the cards which determine how positive/negative a fortune will be
 * @param {*} cardNames A list of the names of the cards chosen by the user
 * @returns A random interpretation given the sum of the values
 */

function randomInterp(cardNames) {
  let total = 0;
  for (const name of cardNames) {
    total += cardData[0][name]["Value"];
  }
  console.log(interpData);
  let randomChoice = Math.floor(Math.random() * 5) + 1;
  return interpData[0][total.toString()]["Interpretation" + randomChoice];
}

setCardProp();

function flipCard() {
  this.classList.toggle("is-flipped");
}
cards.forEach(card => card.addEventListener("click", flipCard));

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
