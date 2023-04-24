function shakeBall() {
    var question = document.getElementById("question").value;
    if (question.length > 0) {
      document.getElementById("response").innerHTML = "";
      document.querySelector(".eight-ball").classList.add("shake");
      setTimeout(getResponse, 800);
    } else {
      document.getElementById("response").innerHTML = "Please enter a question.";
    }
  }
  
  function getResponse() {
    var responses = [
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
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful."
    ];
    var response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById("response").innerHTML = response;
    document.querySelector(".eight-ball").classList.remove("shake");
  }
  