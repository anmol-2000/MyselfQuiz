var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

var name = chalk.bold("Please tell me your name first? ");
var username = readlineSync.question(name);
var upper = username.toUpperCase();
console.log("Welcome ", chalk.cyanBright(upper), "to 'Myself quiz'");
console.log("\n")
console.log("Please type only option as your answer, Quiz starts from here: \n");





function play(answer) {
  console.log();
  var userAnswer = readlineSync.question("Answer?: ");
  var res = userAnswer.toLowerCase();

  if (res == answer) {
    console.log(chalk.bold('BINGO !!'), 'You are right man!!')
    score = score + 1;
    console.log(chalk.magentaBright.bold("Current score:"), chalk.cyanBright(score));
    console.log(" ")
  }
  else {
    console.log(chalk.bold("OOPS!!!,You are wrong bhidu!!!"));
    console.log(" The Right answer is:", chalk.bold(answer));
    score = score - 1;
    console.log(chalk.magentaBright.bold("Current score:"), chalk.cyanBright(score));
    console.log(" ")
  }
}


var array = [
  {
    question: 'Do you know my name ?\na = Anmol Ahuja\nb = Tanay Pratap\nc = Aashsih Ahuja',
    answer: "a"

  },
  {
    question: "Do you know my highest Qualification completed till date?\na = graduated\nb = High school\nc = Intermediate",
    answer: "c"

  },
  {
    question: "Do you know my Favourite programing language\na = C++\nb = Python\nc = Java",
    answer: "b"
  },
  {
    question: "Do you know my birthdate?\na = 02 June\nb = 02 April\nc = 02 May ",
    answer: "a"
  },
  {
    question: "Do you know my Current City name?\na = Banglore\nb = Chandigarh\nc = Delhi",
    answer: "b"
  }
];
for (var i = 0; i < array.length; i++) {
  console.log("Ques", (i + 1), ':', chalk.bold(array[i].question));
  play(array[i].answer);
}
console.log("\n\t Your Final score is:", chalk.cyanBright(score));

if (score == 5) {
  console.log(chalk.bold("\nCongrrats you got Full Score, You know the developer very well!!!"));
}
else {
  if ((score == 3) || (score == 4)) {
    console.log("\tYou score good!!");
  }
  else {
    console.log("You score is less than 3, Maybe you do not know developer");
  }
}