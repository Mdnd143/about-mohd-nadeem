var readlineSync=require('readline-sync');
var score=0;
var usrNme=readlineSync.question('Enter Your Name  ');
console.log("Welcome  "+usrNme+ "! here i will ask some question about nadeem. let see how well do you know nadeem?");
var questions=[
  {
    question:"What is my nick name ? ",
    answer:"aatif"
  },
  {
    question:"i am male or female? ",
    answer:"male"
  },
  {
    question:"inwhich city do i live ? ",
    answer:"ghaziabad"
  },
  {
    question:"inwhich field i am expert in? ",
    answer:"drawing"
  },
  {
    question:"what i really like the most in food? ",
    answer:"burger"
  },
  {
    question:"which sport i like the most? ",
    answer:"cricket"
  },
  {
    question:"which grade i got in my 12th standard?   ",
    answer:"b"
  },
  {
    question:"inwhich subject i was failed during my 12th standard? ",
    answer:"physics"
  }
];
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer)
  {  
  console.log("awesome! You know me in this.");
  score=score+1;
  console.log("Your score is "+score);
  }
  else
  {
    score=score-1;
    console.log("Your score is "+score);
    console.log("what? you dont know this thing about me?");
  }
}

for (var i=0;i<questions.length;i++)
{
  var currentquestions=questions[i];
  play(currentquestions.question,currentquestions.answer)
}