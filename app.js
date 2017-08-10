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

for (var qcount = 0; qcount < 5; qcount++) {
  var tempReply = prompt (usrName + ' - ' + question[qcount] + ' ' + foods[qcount]);

  console.log(tempReply);
  console.log(tempReply.toLowerCase() );

  if (tempReply.toLowerCase() === 'yes' || tempReply.toLowerCase() === 'y') {
    alert(yesRespo[qcount] + ' ' + foods[qcount]);
  }
  else if (tempReply.toLowerCase() === 'no' || tempReply.toLowerCase() === 'n') {
    alert(noRespo[qcount] + ' ' + foods[qcount]);
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
    alert('Your guess was not 1 to 100 - You lose a turn.');
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
// var eatsVeggie = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat vegetables?');
// var lowerEatsVeggie = eatsVeggie.toLowerCase ();
// console.log('Question Prompt Does Noah eat vegetables?');
// console.log('Entered vaule is ' + eatsVeggie);
// console.log('Converted vaule is ' + lowerEatsVeggie);
//
// if (lowerEatsVeggie === 'yes' || lowerEatsVeggie === 'y') {
//   alert('WRONG - Noah does not eat vegetables');
// }
// else if (lowerEatsVeggie === 'no' || lowerEatsVeggie === 'n') {
//   alert('Correct!! - Noah does not eat vegetables.');
// }
// else {
//   alert('You did not enter a Yes, No, Y or N');
// }
//
// var eatsMeat = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat meat?');
// var lowerEatsMeat = eatsMeat.toLowerCase ();
// console.log('Question Prompt Does Noah eat meat?');
// console.log('Entered vaule is ' + eatsMeat);
// console.log('Converted vaule is ' + lowerEatsMeat);
//
// if (lowerEatsMeat === 'no' || lowerEatsMeat === 'n') {
//   alert('WRONG - Noah does eat meat.');
// }
// else if (lowerEatsMeat === 'yes' || lowerEatsMeat === 'y') {
//   alert('Correct!! - Noah does eat meat.');
// }
// else {
//   alert('You did not enter a Yes, No, Y or N');
// }
//
// var eatsMeatVeggie = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat meat with vegetables?');
// var lowerEatsMeatVeggie = eatsMeatVeggie.toLowerCase ();
// console.log('Question Prompt Does Noah eat meat vegetables?');
// console.log('Entered vaule is ' + eatsMeatVeggie);
// console.log('Converted vaule is ' + lowerEatsMeatVeggie);
//
// if (lowerEatsMeatVeggie === 'no' || lowerEatsMeatVeggie === 'n') {
//   alert('Correct - There are vegetables all over that meat.');
// }
// else if (lowerEatsMeatVeggie === 'yes' || lowerEatsMeatVeggie === 'y') {
//   alert('WRONG - There are vegetables everywhere.');
// }
// else {
//   alert('You did not enter a Yes, No, Y or N');
// }
//
// var eatsPotatoes = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat potatoes?');
// var lowerEatsPotatoes = eatsPotatoes.toLowerCase ();
// console.log('Question Prompt Does Noah eat potatoes?');
// console.log('Entered vaule is ' + eatsPotatoes);
// console.log('Converted vaule is ' + lowerEatsPotatoes);
//
// if (lowerEatsPotatoes === 'no' || lowerEatsPotatoes === 'n') {
//   alert('WRONG - Noah does eat potatoes - It goes with meat.');
// }
// else if (lowerEatsMeat === 'yes' || lowerEatsMeat === 'y') {
//   alert('Correct!! - Noah does eat potatoes - It goes with meat.');
// }
// else {
//   alert('You did not enter a Yes, No, Y or N');
// }
//
// var eatsMeatVegPo = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat mean and potatoes with vegetables?');
// var lowerEatsMeatVegPo = eatsMeatVegPo.toLowerCase ();
// console.log('Question Prompt Does Noah eat meat po veg?');
// console.log('Entered vaule is ' + eatsMeatVegPo);
// console.log('Converted vaule is ' + lowerEatsMeatVegPo);
//
// if (lowerEatsMeatVegPo === 'no' || lowerEatsMeatVegPo === 'n') {
//   alert('Correct!! - Noah does eat meat and potatoes, but not when someone has hiddened vegetables in them.');
// }
// else if (lowerEatsMeatVegPo === 'yes' || lowerEatsMeatVegPo === 'y') {
//   alert('WRONG!! - Noah does eat vegetables, even when hidden in meat and potatoes.');
// }
// else {
//   alert('You did not enter a Yes, No, Y or N');
// }
