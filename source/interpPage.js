// const { range } = require("express/lib/request");
// import cardData from "source\\interpretations.json"
// Flip cards
import cardData from "./interpretations.json" assert { type: 'json' }

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

  // for (const card of cards) {
  //   let randomInterp = Math.floor(Math.random() * 3) + 1;
  //   let cardImg = card.querySelector('img');
  //   const backCard = card.querySelector('.card-back')
    
  //   card.querySelector('h3').innerText = cardsSelected[index]["Name"];
  //   cardImg.src = cardsSelected[index]["src"];
  //   cardImg.alt = cardsSelected[index]["alt"];
  //   backCard.querySelector('h3').innerText = cardsSelected[index]["Name"];
  //   backCard.querySelector('h4').innerText = jsonObjs[index]["Description"];
  //   backCard.querySelector('p').innerText = "Interpretation: " + jsonObjs[index]["Interp" + randomInterp];
  //   index++;
  // }
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
