var questionContainer = document.querySelector(".question-container");

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

var questionThree= questionsArr[2].question;

var printQuestion = function() {
    const printContainer = document.createElement("div");
    printContainer.className = "Questions";
    printContainer.innerHTML = "<h3>" + questionOne + "</h3>";
    console.log(printContainer);
    return printContainer;
};

questionContainer.appendChild(printQuestion());


// step1 creat div containing question as h2 and correct and incorrect as li's
// step 2 target the li with the "correct" id 
// step 3 target question to do nothing else window incorrect