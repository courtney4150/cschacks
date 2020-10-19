start = document.getElementById('start');
quizContainer = document.getElementById('quiz');
resultsContainer = document.getElementById('results');
quiz = document.getElementById('quiz');
a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');
question = document.getElementById('question');
nextButton = document.getElementById('next');
results = document.getElementById('results');
results.style.display = "none";
runningQuestion = 0;
numCorrect = 0;

myQuestions = [
{
  question: "What is the best pet?",
  a: "dog",
  b: "fish",
  c: "cat",
  correctAnswer: "c"
},
{
  question: "this is the second question?",
  a: "aaaaaaa",
  b: "bbbbbbb",
  c: "ccccccc",
  correctAnswer: "c"
},
{
  question: "q3?",
  a: "answera",
  b: "answerb",
  c: "answerc",
  correctAnswer: "c"
}
];

function showQuestion()
{
  question.innerHTML = "<p>" + myQuestions[runningQuestion].question + "</p>";
  a.innerHTML = myQuestions[runningQuestion].a;
  b.innerHTML = myQuestions[runningQuestion].b;
  c.innerHTML = myQuestions[runningQuestion].c;
}

start.addEventListener("click", showQuestion());


function checkAnswer(answer)
{
  if(answer === myQuestions[runningQuestion].correctAnswer)
  {
    numCorrect++;
    document.getElementById(myQuestions[runningQuestion].correctAnswer).style.background='green';
  }
}

function nextQuestion()
{
  document.getElementById(myQuestions[runningQuestion].correctAnswer).style.background=null;
  runningQuestion++;
  showQuestion();
  if(runningQuestion === myQuestions.length-1)
  {
    nextButton.style.display = "none";
    results.style.display = "block";
  }
}

function quizResults()
{
  document.getElementById('results').innerHTML = "<p>Your score is " + numCorrect + " out of " + myQuestions.length + " questions!</p>";
}
