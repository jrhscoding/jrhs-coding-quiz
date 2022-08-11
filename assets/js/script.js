var questionContainer = document.querySelector(".question-container");
var startButton = document.querySelector("#start");

var timeLeft = 30;

score = 0;

questionsArr = [
    {
        question: "Which symbol is used for comments in JavaScript?",
        correct: "//",
        incorrectOne: "<!--  -->"
    },
    {
        question: "In order for a variable to be able to change, which of the following would you use?",
        correct: "Let",
        incorrectOne: "Const"
    },
    {
        question: "What is the most current version of JavaScript",
        correct: "ES6",
        incorrectOne: "ES4"
    }
];

var questionOne = questionsArr[0].question;

var questionTwo = questionsArr[1].question;

var questionThree = questionsArr[2].question;

// function to return the question onto the page
var printQuestion = function () {
    let printContainer = document.createElement("div");
    printContainer.className = "Questions";
    printContainer.innerHTML = "<h3>" + questionOne + "</h3>";
    console.log(printContainer);


    let answerWrapper = document.createElement("ul");
    answerWrapper.className = "answer-wrapper";
    printContainer.appendChild(answerWrapper);

    let listQuestion1 = document.createElement("li");
    listQuestion1.className = "answers";
    listQuestion1.id = "correct";
    listQuestion1.textContent = questionsArr[0].correct;
    answerWrapper.appendChild(listQuestion1);

    let listQuestion2 = document.createElement("li");
    listQuestion2.className = "answers";
    listQuestion2.textContent = questionsArr[0].incorrectOne;
    answerWrapper.appendChild(listQuestion2);

    answerWrapper.addEventListener("click", function (event) {

        if (event.target.id == "correct") {
            alert("correct!");
            score = + 5;
            questionContainer.appendChild(printQuestionTwo());
        } else {
            alert("wrong!");
            timeLeft = timeLeft - 5;
            questionContainer.appendChild(printQuestionTwo());
        };
        let child = this.getElementsByClassName(".Questions");
        printContainer.remove(child);
    }
    )

    return printContainer;
};

var printQuestionTwo = function () {

    let printContainer = document.createElement("div");
    printContainer.className = "Questions";
    printContainer.innerHTML = "<h3>" + questionTwo + "</h3>";
    console.log(printContainer);


    let answerWrapper = document.createElement("ul");
    answerWrapper.className = "answer-wrapper";
    printContainer.appendChild(answerWrapper);

    let listQuestion1 = document.createElement("li");
    listQuestion1.className = "answers";
    listQuestion1.id = "correct";
    listQuestion1.textContent = questionsArr[1].correct;
    answerWrapper.appendChild(listQuestion1);

    let listQuestion2 = document.createElement("li");
    listQuestion2.className = "answers";
    listQuestion2.textContent = questionsArr[1].incorrectOne;
    answerWrapper.appendChild(listQuestion2);

    answerWrapper.addEventListener("click", function (event) {
        console.log(event.target.id)
        if (event.target.id == "correct") {
            alert("correct!");
            score = score + 5;
            questionContainer.appendChild(printQuestionThree());
        } else {
            alert("wrong!");
            timeLeft = timeLeft - 5;
            questionContainer.appendChild(printQuestionThree());
        };
        let child = this.getElementsByClassName(".Questions");
        printContainer.remove(child);
    }
    )

    return printContainer;
};

var printQuestionThree = function () {

    let printContainer = document.createElement("div");
    printContainer.className = "Questions";
    printContainer.innerHTML = "<h3>" + questionThree + "</h3>";
    console.log(printContainer);


    let answerWrapper = document.createElement("ul");
    answerWrapper.className = "answer-wrapper";
    printContainer.appendChild(answerWrapper);

    let listQuestion1 = document.createElement("li");
    listQuestion1.className = "answers";
    listQuestion1.id = "correct";
    listQuestion1.textContent = questionsArr[2].correct;
    answerWrapper.appendChild(listQuestion1);

    let listQuestion2 = document.createElement("li");
    listQuestion2.className = "answers";
    listQuestion2.textContent = questionsArr[2].incorrectOne;
    answerWrapper.appendChild(listQuestion2);

    answerWrapper.addEventListener("click", function (event) {
        console.log(event.target.id)
        if (event.target.id == "correct") {
            alert("correct! game over!");
            score = score + 5;
            gameOver();
        } else {
            alert("wrong! game over!");
            gameOver();
        };
    }
    )

    return printContainer;
};

// added event listener to print question onto page after clicking start
startButton.addEventListener("click", function () {
    questionContainer.appendChild(printQuestion());
    startButton.style.display = 'none';
    countdown();
});

var time = document.querySelector("#timer");

function countdown() {


    var timeInterval = setInterval(function () {
        timeLeft--;
        time.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000)

    timeInterval();
}

//game over function

function gameOver() {
    var userName = window.prompt("Enter your name:");
    thisGame = {
        name: userName,
        score: score
    }
    // function retrieveInfo () {
    var prevHighScore = JSON.parse(localStorage.getItem("highscore"));
    console.log(prevHighScore);

    if (prevHighScore === null) {
        alert("Congratulations! You have a new high score!")
        localStorage.setItem("highscore", JSON.stringify(thisGame));
    } else if (prevHighScore.score < thisGame.score) {
        alert("Congratulations! You have a new high score!")
        localStorage.setItem("highscore", JSON.stringify(thisGame));
    } else if (prevHighScore.score == thisGame.score) {
        alert("You and " + prevHighScore.name + " are tied with the highest score!")
    } else {
        alert("Unfortunately " + thisGame.score + " was not good enough to beat " + prevHighScore.name + "'s score of " + prevHighScore.score)
    }
};