const assert = require('assert');
const { randomSentence } = require('./randomSentence');

//sentence length 12/27 -4.4

function randSentTest() {
  let nouns = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let determiners = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let transitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let intransitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let adjectives = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let adverbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let sum = 0;
  for (i = 0; i < 10000; i++) {
    sum =+ randomSentence().length;
  }
  let avg = sum/10000;
  console.log(avg);

}

randSentTest();
