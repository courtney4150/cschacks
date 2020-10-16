(function(){
  function buildQuiz()
  {
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answer = [];

        for(letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter}
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers> ${answers.join('')}" </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults()
  {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) -> {

      const answerConatiner = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]: checked`;
      const userAnswer = (answerConatiner.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){
        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    }
  );

  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  const myQuestions = [
  {
    question: "q1?",
    answers: {
      a: "answera",
      b: "answerb",
      c: "answerc"
    },
    correctAnswer: "c"
  },
  {
    question: "q2?",
    answers: {
      a: "answera",
      b: "answerb",
      c: "answerc"
    },
    correctAnswer: "c"
  },
  {
    question: "q3?",
    answers: {
      a: "answera",
      b: "answerb",
      c: "answerc"
    },
    correctAnswer: "c"
  }
  ];

  buildQuiz();
  showQuiz();

  submitButton.addeventListener('click', showResults);
})();
