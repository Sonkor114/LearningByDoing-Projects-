const questions = [
    {
      question: "What is the name of the month in which Ramadan occurs?",
      answer: [
        { text: "Shawwal", correct: false },
        { text: "Rajab", correct: false },
        { text: "Ramadan", correct: true },
        { text: "Muharram", correct: false },
      ],
    },
    {
      question: "What meal is eaten before dawn during Ramadan?",
      answer: [
        { text: "Iftar", correct: false },
        { text: "Suhoor", correct: true },
        { text: "Taraweeh", correct: false },
        { text: "Fajr", correct: false },
      ],
    },
    {
      question: "Which pillar of Islam does fasting in Ramadan belong to?",
      answer: [
        { text: "Shahada (Faith)", correct: false },
        { text: "Salah (Prayer)", correct: false },
        { text: "Sawm (Fasting)", correct: true },
        { text: "Zakat (Charity)", correct: false },
      ],
    },
    {
      question: "What is the meal eaten to break the fast at sunset called?",
      answer: [
        { text: "Suhoor", correct: false },
        { text: "Taraweeh", correct: false },
        { text: "Iftar", correct: true },
        { text: "Dhuhr", correct: false },
      ],
    },
    {
      question: "What is the special night in Ramadan that is better than 1,000 months?",
      answer: [
        { text: "Eid al-Fitr", correct: false },
        { text: "Laylat al-Qadr", correct: true },
        { text: "Ashura", correct: false },
        { text: "Hajj", correct: false },
      ],
    },
  ];
  

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("text-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  nextButton.style.display = "none";
//   console.log("Quiz started")
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function  showScore() {
    resetState();
    questionElement.innerHTML = ` congratulation: you scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex <  questions.length)  {
        handleNextButton();
    }else {
        startQuiz();
    }
})

startQuiz();
