'use strict';
var correctCount = 0;

var usrName = prompt ('Hello, Please enter your name');

var question;
question = ['Using Yes, No, Y or N anwser the following: Does Noah eat', 'Using Yes, No, Y or N anwser the following: Does Noah eat', 'Using Yes, No, Y or N anwser the following: Does Noah eat', 'Using Yes, No, Y or N anwser the following: Does Noah eat', 'Using Yes, No, Y or N anwser the following: Does Noah eat'];

var foods;
foods = ['vegetables?', 'meat?', 'meat with vegetables?', 'potatoes?', 'meat and potatoes with vegetables?'];

var noRespo;
noRespo = ['Correct!! - Noah does not eat', 'WRONG!! - Noah does eat', 'Correct!! - Noah does not eat','WRONG!! - Noah does eat', 'Correct!! - Noah does not eat'];

var yesRespo;
yesRespo = ['WRONG!! - Noah does not eat', 'Correct!! - Noah does eat', 'WRONG!! - Noah does not eat', 'Correct!! - Noah does eat', 'WRONG!! - Noah does not eat'];

var failRespo;
failRespo = ['You did not enter a Yes, No, Y or N', 'You did not enter a Yes, No, Y or N', 'You did not enter a Yes, No, Y or N', 'You did not enter a Yes, No, Y or N', 'You did not enter a Yes, No, Y or N'];

var noInc;
noInc = [0, 1, 0, 1, 0];

var yesInc;
yesInc = [1, 0, 1, 0, 1,];

for (var qcount = 0; qcount < 5; qcount++) {
  var tempReply = prompt (usrName + ' - ' + question[qcount] + ' ' + foods[qcount]);

  console.log(tempReply);
  console.log(tempReply.toLowerCase() );

  if (tempReply.toLowerCase() === 'yes' || tempReply.toLowerCase() === 'y') {
    alert(yesRespo[qcount] + ' ' + foods[qcount]);
    correctCount += yesInc[qcount];
  }
  else if (tempReply.toLowerCase() === 'no' || tempReply.toLowerCase() === 'n') {
    alert(noRespo[qcount] + ' ' + foods[qcount]);
    correctCount += noInc[qcount];
  }
  else {
    alert(failRespo[qcount]);
  }
}

var theNum = 76;

for (var guessCount = 1; guessCount < 5; guessCount++) {
  var numGuess = prompt (usrName + ' - Pick a number: 1 to 100 - ' + guessCount + ' of 4 attempts.');

  console.log('Guess count' + guessCount);
  console.log('Guess ' + numGuess);

  if (numGuess == theNum) {
    alert('Correct!!');
    guessCount = 5;
    correctCount++;
  }
  else if (numGuess < 76) {
    alert('Incorrect - Pick a larger number.');
  }
  else if (numGuess > 76) {
    alert('Incorrect - Pick a smaller number.');
  }
  else {
    alert('Your guess did not meet the number requirement - You lose a turn.');
  }
}

var catNames;
catNames = ['tommy', 'tommie', 'tom', 'thom'];

var catCorrectCount = 0;

for (var catGuessCount = 1; catGuessCount < 7; catGuessCount++) {
  var nameGuess = prompt (usrName + ' - Pick the names of the past and present cats of Noah  - ' + catGuessCount + ' of 6 attempts.');

  console.log('Guess count' + catGuessCount);
  console.log('Guess ' + nameGuess);

  if (catNames.includes(nameGuess.toLowerCase)) {
    alert('Correct!!');
    catCorrectCount++;
  }
  else {
    alert('Nope - Try Again');
  }
}

alert('Correct names of the past and present cats of Noah are: ' + catNames[0] + ' ' + catNames[1] + ' ' + catNames[2] + ' ' + catNames[3]);

if (catCorrectCount){
  correctCount++;
}

alert(usrName + ' - You reached the end of the game - Your score was: ' + correctCount + ' of 7.');
