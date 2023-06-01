const answers = [
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

const magicBall = document.getElementById("magic-ball");
const questionInput = document.getElementById("question-input");
const shakeBtn = document.getElementById("shake-btn");
const answer = document.getElementById("answer");

function getRandomAnswer() {
    return answers[Math.floor(Math.random() * answers.length)];
}

function shake() {
    magicBall.classList.add("shake");
    setTimeout(() => {
        magicBall.classList.remove("shake");
    }, 1000);
}

function handleShakeBtnClick() {
    if (!questionInput.value) {
        answer.innerText = "Please enter a question.";
        return;
    }
    answer.innerText = getRandomAnswer();
    shake();
}

shakeBtn.addEventListener("click", handleShakeBtnClick);