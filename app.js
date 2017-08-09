'use strict';

var eatsVeggie = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat vegetables?');
var lowerEatsVeggie = eatsVeggie.toLowerCase ();
console.log('Question Prompt Does Noah eat vegetables?');
console.log('Entered vaule is ' + eatsVeggie);
console.log('Converted vaule is ' + lowerEatsVeggie);

if (lowerEatsVeggie === 'yes' || lowerEatsVeggie === 'y') {
  alert('WRONG - Noah does not eat vegetables');
}
else if (lowerEatsVeggie === 'no' || lowerEatsVeggie === 'n') {
  alert('Correct!! - Noah does not eat vegetables.');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}

var eatsMeat = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat meat?');
var lowerEatsMeat = eatsMeat.toLowerCase ();
console.log('Question Prompt Does Noah eat meat?');
console.log('Entered vaule is ' + eatsMeat);
console.log('Converted vaule is ' + lowerEatsMeat);

if (lowerEatsMeat === 'no' || lowerEatsMeat === 'n') {
  alert('WRONG - Noah does eat meat.');
}
else if (lowerEatsMeat === 'yes' || lowerEatsMeat === 'y') {
  alert('Correct!! - Noah does eat meat.');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}

var eatsMeatVeggie = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat meat with vegetables?');
var lowerEatsMeatVeggie = eatsMeatVeggie.toLowerCase ();
console.log('Question Prompt Does Noah eat meat vegetables?');
console.log('Entered vaule is ' + eatsMeatVeggie);
console.log('Converted vaule is ' + lowerEatsMeatVeggie);

if (lowerEatsMeatVeggie === 'no' || lowerEatsMeatVeggie === 'n') {
  alert('Correct - There are vegetables all over that meat.');
}
else if (lowerEatsMeatVeggie === 'yes' || lowerEatsMeatVeggie === 'y') {
  alert('WRONG - There are vegetables everywhere.');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}

var eatsPotatoes = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat potatoes?');
var lowerEatsPotatoes = eatsPotatoes.toLowerCase ();
console.log('Question Prompt Does Noah eat potatoes?');
console.log('Entered vaule is ' + eatsPotatoes);
console.log('Converted vaule is ' + lowerEatsPotatoes);

if (lowerEatsPotatoes === 'no' || lowerEatsPotatoes === 'n') {
  alert('WRONG - Noah does eat potatoes - It goes with meat.');
}
else if (lowerEatsMeat === 'yes' || lowerEatsMeat === 'y') {
  alert('Correct!! - Noah does eat potatoes - It goes with meat.');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}

var eatsMeatVegPo = prompt('Using Yes, No, Y or N anwser the following: Does Noah eat mean and potatoes with vegetables?');
var lowerEatsMeatVegPo = eatsMeatVegPo.toLowerCase ();
console.log('Question Prompt Does Noah eat meat po veg?');
console.log('Entered vaule is ' + eatsMeatVegPo);
console.log('Converted vaule is ' + lowerEatsMeatVegPo);

if (lowerEatsMeatVegPo === 'no' || lowerEatsMeatVegPo === 'n') {
  alert('Correct!! - Noah does eat meat and potatoes, but not when someone has hiddened vegetables in them.');
}
else if (lowerEatsMeatVegPo === 'yes' || lowerEatsMeatVegPo === 'y') {
  alert('WRONG!! - Noah does eat vegetables, even when hidden in meat and potatoes.');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}
