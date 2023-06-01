const magic8ball = document.getElementById('magic8ball');
const shakeButton = document.getElementById('shake');

const answers = [
  'It is certain',
  'Without a doubt',
  'You may rely on it',
  'Yes, definitely',
  'It is decidedly so',
  'As I see it, yes',
  'Most likely',
  'Yes',
  'Outlook good',
  'Signs point to yes',
  'Reply hazy, try again',
  'Better not tell you now',
  'Ask again later',
  'Cannot predict now',
  'Concentrate and ask again',
  'Don\'t count on it',
  'Outlook not so good',
  'My sources say no',
  'Very doubtful',
  'My reply is no'
];

function shakeMagic8Ball() {
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  const speech = new SpeechSynthesisUtterance(randomAnswer);
  speech.lang = 'en-US';
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

shakeButton.addEventListener('click', shakeMagic8Ball);
magic8ball.addEventListener('mousedown', function() {
  this.style.backgroundPosition = 'bottom';
});
magic8ball.addEventListener('mouseup', function() {
  this.style.backgroundPosition = 'top';
});