var questionContainer = document.querySelector(".question-container");
var startButton = document.querySelector("#start");

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
        } else {
            alert("wrong!");
        };
    }
    )

    return printContainer;
};


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
            questionContainer.appendChild(printQuestionTwo());
        } else {
            alert("wrong!");
            questionContainer.appendChild(printQuestionTwo());
        };
    }
    )

    return printContainer;
};



// added event listener to print question onto page after clicking start
startButton.addEventListener("click", function () {
    questionContainer.appendChild(printQuestion());
});


// step1 creat div containing question as h2 and correct and incorrect as li's
// step 2 target the li with the "correct" id 
// step 3 target question to do nothing else window incorrect