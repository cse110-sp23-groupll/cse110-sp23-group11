const { range } = require("express/lib/request");

// Flip cards
const cards = document.querySelectorAll(".card");

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

const tempNum = [1, 2, 3];
const interp = JSON.parse('{"Name": "Card 1", "Interp1": "dummy text1", "Interp2": "dummy text2",  "Interp3": "dummy text3"}, { "Name": "Card 2", "Interp1": "dummy text4", "Interp2": "dummy text5", "Interp3": "dummy text6"}, {"Name": "Card 3", "Interp1": "dummy text7", "Interp2": "dummy text8", "Interp3": "dummy text9"}')
for (const card of cards) {
  let index = Math.floor(Math.random() * interp.size) - 1;
  card.querySelector('h3').innerText = interp[0]["Card" + tempNum[index]];
  tempNum.splice(index, 1);
}