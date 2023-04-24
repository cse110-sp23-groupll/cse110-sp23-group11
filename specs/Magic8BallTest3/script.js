const magic8Ball = document.getElementById('magic-8-ball');
const answers = [
  'It is certain', 'It is decidedly so', 'Without a doubt',
  'Yes, definitely', 'You may rely on it', 'As I see it, yes',
  'Most likely', 'Outlook good', 'Yes', 'Signs point to yes',
  'Reply hazy try again', 'Ask again later', 'Better not tell you now',
  'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it',
  'My reply is no', 'My sources say no', 'Outlook not so good',
  'Very doubtful'
];

magic8Ball.addEventListener('mousedown', () => {
  magic8Ball.style.cursor = 'grabbing';
  magic8Ball.onmousemove = shakeBall;
});

magic8Ball.addEventListener('mouseup', () => {
  magic8Ball.style.cursor = 'grab';
  magic8Ball.onmousemove = null;
  const answer = answers[Math.floor(Math.random() * answers.length)];
  speakAnswer(answer);
});

function shakeBall(event) {
  magic8Ball.style.transform = `translate(${event.movementX}px, ${event.movementY}px)`;
}

function speakAnswer(answer) {
  const utterance = new SpeechSynthesisUtterance(answer);
  window.speechSynthesis.speak(utterance);
}