function shake() {
	// Get the input value
	var question = document.getElementById("question").value;

	// Check if the user entered a question
	if (question.length == 0) {
		alert("Please ask a question!");
		return;
	}

	// Wobble the magic 8 ball image
	var eightball = document.getElementById("eightball");
	eightball.classList.add("shake");

	// Get a random answer from the list
	var answers = ["It is certain", 
                  "It is decidedly so", 
                  "Without a doubt", 
                  "Yes, definitely", 
                  "You may rely on it", 
                  "As I see it, yes", 
                  "Most likely", 
                  "Outlook good", 
                  "Yes", 
                  "Signs point to yes", 
                  "Reply hazy try again", 
                  "Better not tell you now", 
                  "Ask again later", 
                  "Cannot predict now", 
                  "Concentrate and ask again", 
                  "Don't count on it", 
                  "Outlook not so good", 
                  "My sources say no", 
                  "Very doubtful"];
	var randomAnswer = answers[Math.floor(Math.random() * answers.length)];

	// Display the answer
	var answer = document.getElementById("answer");
	answer.innerHTML = randomAnswer;

	// Speak the answer
	var speech = new SpeechSynthesisUtterance();
	speech.text = randomAnswer;
	window.speechSynthesis.speak(speech);

	// Remove the wobble animation
  	// Remove the wobble animation after 1 second
	setTimeout(function() {
		eightball.classList.remove("shake");
	}, 1000);
}

