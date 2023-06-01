// const { range } = require("express/lib/request");

// Flip cards
const cards = document.querySelectorAll(".card");

/**
 * Pulls JSON card strings from localStorage and parses them for use in updating card information
 */
function getCardsFromLS() {
  let selectedCards = [localStorage.getItem("past"), localStorage.getItem("present"), localStorage.getItem("future")];
  let cardObjs = [];
  for (const card of selectedCards) {
    cardObjs.push(JSON.parse(card));
  }

  return cardObjs;
}

/**
 * Sets card information using past, present, and future information
 */
function setCardProp() {
  let tempJson = '{"Description": "Description Name1","Interp1": "interp1","Interp2": "interp2","Interp3": "interp3"}\n{"Description": "Description Name2","Interp1": "interp4","Interp2": "interp5","Interp3": "interp6"}\n{"Description": "Description Name3", "Interp1": "interp7", "Interp2": "interp8", "Interp3": "interp9"}';
  const jsonObjsSts = tempJson.split("\n");
  let jsonObjs = [];
  let cardsSelected = getCardsFromLS();

  for (const obj of jsonObjsSts) {
    jsonObjs.push(JSON.parse(obj));
  }

  let index = 0;
  for (const card of cards) {
    let randomInterp = Math.floor(Math.random() * 3) + 1;
    let backCard = card.querySelector('.card-back')
    card.querySelector('h3').innerText = cardsSelected[index]["Name"];
    backCard.querySelector('h3').innerText = cardsSelected[index]["Name"];
    backCard.querySelector('h4').innerText = jsonObjs[index]["Description"];
    backCard.querySelector('p').innerText = "Interpretation: " + jsonObjs[index]["Interp" + randomInterp];
    index++;
  }
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
