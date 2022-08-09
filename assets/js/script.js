var questionContainer = document.querySelector(".question-container");
var startButton = document.querySelector("#start");
var playerInfoArr = [];
// let currentPlayerInfo = {
//     score: 0
// };
score = 0;

questionsArr = [
    {
        question: "What color is the sky?",
        correct: "Blue",
        incorrectOne: "Red"
    },
    {
        question: "Whom is Luke Skywalker's father?",
        correct: "Darth Vader",
        incorrectOne: "Steven Colbert"
    },
    {
        question: "Is game of thrones season 7 good?",
        correct: "No",
        incorrectOne: "Yes"
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

    answerWrapper.addEventListener("click", function(event) {
        
        if (event.target.id == "correct") {
            alert("correct!");
            score = + 5;
            questionContainer.appendChild(printQuestionTwo());
        } else {
            alert("wrong!");
            questionContainer.appendChild(printQuestionTwo());
        };
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

    answerWrapper.addEventListener("click", function(event) {
        console.log(event.target.id)
        if (event.target.id == "correct") {
            alert("correct!");
            score = score + 5;
            questionContainer.appendChild(printQuestionThree());
        } else {
            alert("wrong!");
            questionContainer.appendChild(printQuestionThree());
        };
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

    answerWrapper.addEventListener("click", function(event) {
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
});

//game over function

function gameOver() {
    var userName = window.prompt("Enter your name:");
    console.log(score);
};


// step1 creat div containing question as h2 and correct and incorrect as li's
// step 2 target the li with the "correct" id 
// step 3 target question to do nothing else window incorrect