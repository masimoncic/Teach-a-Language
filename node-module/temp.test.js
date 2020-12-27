
const assert = require('assert');
const { isMainThread } = require('worker_threads');
const { randomWord, randomSentence } = require('./randomSentence');



it('Generate Random Sentence', () =>

function testRandomSentence() {
  {
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
  }

  randomSentence();
}