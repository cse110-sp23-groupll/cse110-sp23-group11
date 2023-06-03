// const { range } = require("express/lib/request");

// Flip cards
const cards = document.querySelectorAll(".card");

function setCardProp() {
  let tempNum = [1, 2, 3];
  const interp = '{"Name": "Card 1", "Content": "coolContent1", "Interp1": "dummy text1", "Interp2": "dummy text2",  "Interp3": "dummy text3"}\n{ "Name": "Card 2", "Content": "coolContent2", "Interp1": "dummy text4", "Interp2": "dummy text5", "Interp3": "dummy text6"}\n{"Name": "Card 3", "Content": "coolContent3", "Interp1": "dummy text7", "Interp2": "dummy text8", "Interp3": "dummy text9"}';
  const jsonObjsSts = interp.split("\n");
  let jsonObjs = [];

  for (const obj of jsonObjsSts) {
    jsonObjs.push(JSON.parse(obj));
  }

  for (const card of cards) {
    let index = Math.floor(Math.random() * jsonObjs.length);
    let randomInterp = Math.floor(Math.random() * 3) + 1;
    let backCard = card.querySelector('.card-back')
    card.querySelector('h3').innerText = jsonObjs[index]["Name"];
    backCard.querySelector('h3').innerText = jsonObjs[index]["Name"];
    backCard.querySelector('h4').innerText = jsonObjs[index]["Content"];
    backCard.querySelector('p').innerText = "Interpretation: " + jsonObjs[index]["Interp" + randomInterp];
    tempNum.splice(index, 1);
    jsonObjs.splice(index, 1);
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
