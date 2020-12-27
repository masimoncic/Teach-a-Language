
const assert = require('assert');
const { isMainThread } = require('worker_threads');
const { randomWord } = require('./randomSentence');


let noun1 = randomWord(nouns);
let det1 = '';
let verb = '';
let noun2 = '';
let adj1 = '';
let adj2 = '';
let adv = '';
let det2 = '';


it('Generate Random Sentence', () => {
  let nouns = 
}