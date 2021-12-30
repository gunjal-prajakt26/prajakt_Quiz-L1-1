
var readline = require('readline-sync');


var user = readline.question("What is Your name? ");
console.log("\n Welcome " + user + "\n");
console.log("Welcome to * HTML Quiz * \n");
console.log("------------------------ \n");
console.log("Starting Quiz * \n\n");

console.log("------------------------ \n");



var score = 0;

function quiz(question, answer) {
  var useranswer = readline.question(question);
  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score++;
  } else {
    console.log("Wrong!");
  }
  console.log("--------------------------------");
  console.log("Your score is " + score + "\n");
}

var levelOne = [
  {
    que: "HTML stands for -\n a.HighText Machine Language \n b.HyperText and links Markup Language \n c.HyperText Markup Language\n ",
    ans: "c",
  },
  {
    que: "The correct sequence of HTML tags for starting a webpage is -\n a.Head, Title, HTML, body \n b.HTML, Body, Title, Head \n c.HTML, Head, Title, Body \n",
    ans: "c",
  }, {
    que: "Which of the following element is responsible for making the text bold in HTML? \n a.<pre> \n b.<b> \n c.<br> \n",
    ans: "b",
  }, {
    que: "Which of the following tag is used to insert a line-break in HTML? \n a.<br> \n b.<a> \n c.<pre> \n",
    ans: "a",
  }, {
    que: "Which of the following tag is used for inserting the largest heading in HTML? \n a.<h3>\n b.<h1>\n c.<h5>\n ",
    ans: "b",
  }, {
    que: " How to create an unordered list (a list with the list items in bullets) in HTML? \n a.<ul> \n b.<ol>\n c.<li>\n ",
    ans: "a",
  }];

var levelTwo = [
  {
    que: "Which of following is not an attribute of <form> tag \n a.Method\n b.name \n c.url\n",
    ans: "c",
  }, {
    que: "HTML Is A Subset Of \n a.SGMT \n b.SGMD \n c.SGML\n",
    ans: "c",
  }, {
    que: "The BODY Tag Is Usually Used After \n a.HTML Tag\n b.TITLE Tag\n c.HEAD Tag\n",
    ans: "a",
  }, {
    que: "Gif And Jpg Are The Two Main Types Of What ? \n a.Animated Effects \n b.Videos\n c.Images\n ",
    ans: "a",
  }, {
    que: "Which Is Not A Property Of Attribute Behaviour Of &lt;Marquee&rt; Tag? \n a.Scroll\n b.Alternate\n c. Slide\n",
    ans: "b",
  }, {
    que: "Which attribute sets the text direction as related to lang attribute.\n a.Sub\n b.Lang\n c.Ds\n ",
    ans: "b",
  }
];


for (var i = 0; i < levelOne.length; i++) {
  var q = levelOne[i];
  quiz(q.que, q.ans);
}

if (score === levelOne.length) {

  console.log("--------------------------------");
  console.log("Yeah it's high score \n");
  console.log("Congrats " + user + " Level One is clear!\n");
  console.log("--------------------------------\n\n");
  console.log("Welcome to Level Two\n");
  console.log("**************************");
  for (var i = 0; i < levelTwo.length; i++) {
    var q = levelTwo[i];
    quiz(q.que, q.ans);
  }
} else {
  console.log("Your total Score is:" + score + "/" + levelOne.length + "\n");
  console.log("Thank You For playing");
}

var total = levelOne.length + levelTwo.length;
if (score === total) {

  console.log("--------------------------------");
  console.log("Congrats " + user + " Level Two is clear!\n");
  console.log("Your total Score is:" + score + "/" + total + "\n");
  console.log("Yeah it's high score \n Please Take a Screenshot!!!!");
  console.log("--------------------------------\n\n");
} else {
  console.log("--------------------------------\n\n");
  console.log("Your total Score is:" + score + "/" + total + "\n");
  console.log("Thank You For playing");
}