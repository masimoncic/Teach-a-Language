/*the language object (defined in language.js) handles generating random sentences
and storing all word data.
functionality related to the initial word input is handled with the startingWords object, 
defined in start.js.
After the starting sequence, the programs goes into a loop between 2 states.  loopHandlers.js
is responsible for setting up the first state, and creating all event handlers.
loop.js sets up the UI for the second state, and calls a function from loopSub.js for its 
return value.  This function is then passed into an event handler in loopHandlers.js.

*/
"use strict";
//set constants for loop.js
const loopOptionsContainer = document.getElementById('loop-options-container');
const loopSubmitContainer = document.getElementById('loop-submit-container');
const loopContainer = document.getElementById('loop-container');
const sentenceBox = document.getElementById('sentence-box');
//bind all necessary functions for startingWords.
let boundIntrans = startingWords.createIntrans.bind(startingWords);
let boundTrans = startingWords.createTrans.bind(startingWords);
let boundAdj = startingWords.createAdj.bind(startingWords);
let boundAdv = startingWords.createAdv.bind(startingWords);
//let boundLoop = loop.loopIteration.bind(loop);
//initialize starting sequence
//one initialized, the rest of the program runs through chains of functions.
startingWords.createNouns();
































































//for testing 
/*
language.nouns = [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}];

let freqCount = {'a':0, 'b':0, 'c':0, 'd':0};
for (let i=0; i < 1000; i++) {
  let temp = language.randomWord(language.nouns, 'g4');
  freqCount[temp] += 1;
}
console.log(freqCount);
*/


//for testing
/*
language.nouns = [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}];
language.determiners = [
  {name: 'the', freq: 10, banned: []},
  {name: 'a', freq: 10, banned: []},
  {name: 'some', freq: 2, banned: []},
  {name: 'every', freq: 2, banned: []},
  {name: 'all', freq: 1, banned: []},
  {name: 'several', freq: 1, banned: []},
  {name: 'most', freq: 1, banned: []},
  {name: 'few', freq: 2, banned: []}
]
language.transitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
language.intransitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
language.adjectives = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
language.adverbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
language.intensifiers = [
  {name: 'astoundingly', freq: 10, banned: []},
  {name: 'crazy', freq: 10, banned: []},
  {name: 'dreadfully', freq: 10, banned: []},
  {name: 'colossally', freq: 10, banned: []},
  {name: 'especially', freq: 10, banned: []},
  {name: 'frightfully', freq: 10, banned: []},
  {name: 'literally', freq: 10, banned: []},
  {name: 'somewhat', freq: 10, banned: []},
  {name: 'very', freq: 10, banned: []},
  {name: 'strikingly', freq: 10, banned: []},
  {name: 'terrifically', freq: 10, banned: []},
  {name: 'mightily', freq: 10, banned: []},
  {name: 'rather', freq: 10, banned: []},
  {name: 'fairly', freq: 10, banned: []},
  {name: 'quite', freq: 10, banned: []},
  {name: 'a bit', freq: 10, banned: []},
]
language.conjunctions = [
  {name: 'and', freq: 20, banned: []},
  {name: 'or', freq: 20, banned: []},
  {name: 'if', freq: 20, banned: []},
  {name: 'when', freq: 20, banned: []},
  {name: 'because', freq: 20, banned: []},
  {name: 'but', freq: 20, banned: []},
]


let sum = 0;
for (let i=0; i<100; i++) {
  let temp = language.randomSentence();
  sum += temp.length;
  console.log(temp);
}
console.log(sum/100);

*/

