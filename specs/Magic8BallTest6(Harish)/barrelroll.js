function shake() {
    const input = document.getElementById("user-input");
    const response = document.getElementById("response");
    const eightBall = document.getElementById("eight-ball");
  
    if (input.value) {
      eightBall.classList.add("shake-animation");
      setTimeout(function() {
        eightBall.classList.remove("shake-animation");
        const randomNum = Math.floor(Math.random() * responses.length);
        response.textContent = responses[randomNum];
        input.value = "";
      }, 1000);
    } else {
      response.textContent = "Please ask a question.";
    }
  }
  
  const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good.",
    "My sources say no.",
    "Very doubtful."
  ];
  