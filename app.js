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
  alert('Correct!! - Noah does not eat vegetables');
}
else {
  alert('You did not enter a  Yes, No, Y or N');
}
