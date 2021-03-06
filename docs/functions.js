// importing all the elements we need from poll.html
start = document.getElementById('start');
quizContainer = document.getElementById('quiz');
resultsContainer = document.getElementById('results');
quiz = document.getElementById('quiz');
a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');
d = document.getElementById('d');
question = document.getElementById('question');
nextButton = document.getElementById('next');
results = document.getElementById('results');
response = document.getElementById('response');
recommendation = document.getElementById('recommendation');

//defining the questions and answers
myQuestions = [
{
  question: "How are you doing today?",
  a: "great",
  b: "good",
  c: "ok",
  d: "horrible"
},
{
  question: "What was the weather like today?",
  a: "sunny",
  b: "sunny and cloudy",
  c: "cloudy",
  d: "rainy"
},
{
  question: "Did you go outside today?",
  a: "yes",
  b: "no",
  c: null,
  d: null
},
{
  question: "Did you do something that made you smile or laugh today?",
  a: "yes",
  b: "no",
  c: null,
  d: null
},
{
  question: "Did you exercise today?",
  a: "yes",
  b: "no",
  c: null,
  d: null
},
{
  question: "Did you take some time for yourself?",
  a: "yes",
  b: "no",
  c: null,
  d: null
},
{
  question: "How is your health today?",
  a: "perfect!",
  b: "good",
  c: "ok",
  d: "I feel sick"
},
{
  question: "Have you taken some time away from your phone?",
  a: "yes",
  b: "no",
  c: null,
  d: null
},
{
  question: "How long have you spent looking at a screen today?",
  a: "less than 1 hour",
  b: "1-3 hours",
  c: "4-6 hours",
  d: "7+ hours"
}
];

// more variables
runningQuestion = 0;
points = 0;

// display a question and the answer choices
function showQuestion()
{
  start.style.display = "none";
  a.style.opacity = "1";
  b.style.opacity = "1";
  c.style.opacity = "1";
  d.style.opacity = "1";
  results.style.display = "none";
  a.style.display = "inline";
  b.style.display = "inline";
  if(myQuestions[runningQuestion].c === null)
  {
    c.style.display = "none";
  }
  else
  {
    c.style.display = "inline";
  }

  if(myQuestions[runningQuestion].d === null)
  {
    d.style.display = "none";
  }
  else
  {
    d.style.display = "inline";
  }


  question.innerHTML = "<p>" + myQuestions[runningQuestion].question + "</p>";
  a.innerHTML = myQuestions[runningQuestion].a;
  b.innerHTML = myQuestions[runningQuestion].b;
  c.innerHTML = myQuestions[runningQuestion].c;
  d.innerHTML = myQuestions[runningQuestion].d;
  nextButton.style.opacity = "0.5";
}

// runs when you click one of the answer options
function getPoints(answer)
{
  if(answer === 'a')
  {
    points += 3;
    response.innerHTML = "You responded: " + myQuestions[runningQuestion].a;
  }
  else if (answer === 'b')
  {
    points += 2;
    response.innerHTML = "You responded: " + myQuestions[runningQuestion].b;
  }
  else if (answer === 'c')
  {
    points += 1;
    response.innerHTML = "You responded: " + myQuestions[runningQuestion].c;
  }
  else
  {
    response.innerHTML = "You responded: " + myQuestions[runningQuestion].d;
  }
  nextButton.style.display = "block";

  a.style.display = "none";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";
}

// runs when you click the Next Question button
function nextQuestion()
{
  response.innerHTML = null;

  runningQuestion++;
  showQuestion();
  if(runningQuestion === 8)
  {
    nextButton.style.display = "none";
    nextButton.style.opacity = "0";
    results.style.display = "block";
    results.style.opacity = "1";
  }
}

// display the quiz results
function quizResults()
{
  results.style.opacity = "1";
  results.innerHTML = "<p>Your score is " + points + "!</p>";
  if(points > 21)
  {
    recommendation.innerHTML = "<p>Hmmm... did you somehow cheat on the quiz cause that's a really good score! Keep it up!<br>But I'll keep my eye on you next time you take the quiz.</p>"
  }
  else if (points > 13)
  {
    recommendation.innerHTML = "<p>I've seen better, but I've also seen worse. Reflect on the results and think about what you can change to increase your mood.<br>One possible thing you can do is check out our totally righteous Positive News Outlet!</p>"
  }
  else if (points > 7)
  {
    recommendation.innerHTML = "<p>I can tell you've been having a pretty rought time lately.<br>Maybe try checking out our friend matching service! Everyone needs someone to talk to occasionally.</p>"
  }
  else if (points > -1)
  {
    recommendation.innerHTML = "<p>Here are the University's mental health resources. They offer a ton of resources and are always there to help.<br><a href='https://www.studentaffairs.pitt.edu/cc/'>Click Here</a></p>"
  }
}
