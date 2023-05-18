function shake() {
	// Hide the shake button
	document.getElementById("shake-button").style.display = "none";
	
	// Get the magic 8 ball element
	var eightBall = document.getElementById("eight-ball");

        eightBall.classList.add("shake");
	// cool comment
	
	// Shake the 8 ball
	var interval = setInterval(function() {
		eightBall.style.top = (Math.random() * 20) + "px";
		eightBall.style.left = (Math.random() * 20) + "px";
	}, 50);
	
	// Wait for 1 second
	setTimeout(function() {

        eightBall.classList.remove("shake");

		// Stop shaking the 8 ball
		clearInterval(interval);
		
		// Show the shake button
		document.getElementById("shake-button").style.display = "block";
		
		// Get a random answer
		var answers = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
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
			"Concentrate and ask again"
		];
		var answer = answers[Math.floor(Math.random() * answers.length)];
		
		// Display the answer
		document.getElementById("answer").innerHTML = answer;
	}, 1000);
}
