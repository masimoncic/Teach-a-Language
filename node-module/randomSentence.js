const { randomWord } = require('./randomWord');
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

//module.exports = {


  function randomSentence() {
    let noun1 = randomWord(nouns);
    let det1 = '';
    let verb = '';
    let noun2 = '';
    let adj1 = '';
    let adj2 = '';
    let adv = '';
    let det2 = '';
    if (Math.random() > 0.4) {
        det1 = randomWord(determiners, noun1);
    }
    if (det1) {
        det1 = det1[0].toUpperCase() + det1.slice(1);
    }else {
        noun1 = noun1[0].toUpperCase() + noun1.slice(1);
    }
    if (Math.random() > 0.6) {
        adj1 = randomWord(adjectives, noun1);
    }
    if (Math.random() > 0.5) {
        verb = randomWord(transitiveVerbs);
        noun2 = randomWord(nouns);
        if (Math.random() > 0.6) {
            adj2 = randomWord(adjectives, noun2);
        }
        if (Math.random() > 0.4) {
            det2 = randomWord(determiners, noun2);
        }
    } else {
        verb = randomWord(intransitiveVerbs);
    }
    if (Math.random() > 0.6) {
        adv = randomWord(adverbs, verb);
    }
  
    return det1 + adj1 + noun1 + verb + adv + det2 + adj2 + noun2;
  }
//}

let sum = 0;
for (i = 0; i < 10000; i++) {
  sum =+ randomSentence().length;
}
let avg = sum/10000;
console.log(avg);

