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

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz(questions, quizContainer, resultsContainer, submitButton)
{
  function showQuestions(questions, quizContainer)
  {
  const output = [];
  const answers;

  for(var i=0; i<questions.length; i++)
  {
      answers = [];
      for(letter in questions[i].answers)
      {
        answers.push(
          '<label>'
            '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': ' + questions[i].answers[letter] + '</label>'
        );
      }


      output.push(
        '<div class="question">' questions[i].question + '</div>' +
        '<div class="answers>' answers.join('') + '</div>'
      );
  }
  quizContainer.innerHTML = output.join('');
  }

  function quizResults(questions, quizContainer, resultsContainer)
  {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    let userAnswer = '';

    for(var i=0; i<questions.length; i++)
    {

      //const answerContainer = answerContainers[questionNumber];
      //const selector = `input[name=question${questionNumber}]: checked`;
      const userAnswer = (answerConatiner[i].querySelector('input[name=question'+i+']:checked') || {}).value;

      if(userAnswer === questions[i].correctAnswer)
      {
        numCorrect++;

        answerContainers[i].style.color = 'lightgreen';
      }
      else
      {
        answerContainers[i].style.color = 'red';
      }
    }

    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

}

showQuestions(questions, quizContainer);


submitButton.onclick = function()
{
  showResults(questions, quizContainer, resultsContainer);
}

buildQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
