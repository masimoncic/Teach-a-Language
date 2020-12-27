function randomWord(arr, banCheck=null) {
  function randomWordHelper(arr, banCheck=null) {
    let divisor = 0;
    let upper = 0;
    let lower = 0;
    let randNum = Math.random();
    for (let i of arr) {
        divisor += i.freq;
    }
    for (let j of arr) {
        let quotient = (j.freq) / divisor;
        lower = upper;
        upper += quotient;
        if (lower <= randNum && upper > randNum) {
            //check if the chosen word is on the banned list with another word
            //if so, call the function again;
            //note: currently this can cause an infinite loop if too many words are banned
            if(j.banned.includes(banCheck)) {
                return null;
            }
            else {
              return j.name;
            }
        }
    }
  }
  let val = randomWordHelper(arr, banCheck);
  while (val === null) {
    val = randomWordHelper(arr, banCheck);
  }
  return val;
}

/*let testData = [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}];

let freqCount = {'a':0, 'b':0, 'c':0, 'd':0};
for (i=0; i < 1000; i++) {
  let temp = randomWord(testData, 'g4');
  freqCount[temp] += 1;
}
console.log(freqCount);
*/


let nouns = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
const determiners = [
  {name: 'the', freq: 10, banned: []},
  {name: 'a', freq: 10, banned: []},
  {name: 'some', freq: 2, banned: []},
  {name: 'every', freq: 2, banned: []},
  {name: 'all', freq: 1, banned: []},
  {name: 'several', freq: 1, banned: []},
  {name: 'most', freq: 1, banned: []},
  {name: 'few', freq: 2, banned: []}
]
let transitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
let intransitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
let adjectives = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
let adverbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
{name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
let intensifiers = [
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


function randomSentence() {
  let noun1 = randomWord(nouns);
  let det1 = '';
  let verb = '';
  let noun2 = '';
  let adj1 = '';
  let adj2 = '';
  let adv = '';
  let det2 = '';
  let intens1 = '';
  let intens2 = '';
  let intens3 = '';
  if (Math.random() > 0.4) {
      det1 = randomWord(determiners, noun1);
  }
  if (Math.random() > 0.45) {
      adj1 = randomWord(adjectives, noun1);
      if(Math.random() > 0.65) {
        intens1 = randomWord(intensifiers, adj1);
      }
  }
  if (Math.random() > 0.35) {
      verb = randomWord(transitiveVerbs);
      noun2 = randomWord(nouns);
      if (Math.random() > 0.45) {
          adj2 = randomWord(adjectives, noun2);
          if(Math.random() > 0.65) {
            intens2 = randomWord(intensifiers, adj2);
          }
      }
      if (Math.random() > 0.4) {
          det2 = randomWord(determiners, noun2);
      }
  } else {
      verb = randomWord(intransitiveVerbs);
  }
  if (Math.random() > 0.45) {
      adv = randomWord(adverbs, verb);
      if(Math.random() > 0.65) {
        intens3 = randomWord(intensifiers, adv);
      }
  }
  let sent = det1 + intens1 + adj1 + noun1 + verb + intens3 + adv + det2 + intens2 + adj2 + noun2;
  return sent[0].toUpperCase() + sent.slice(1);
}

let sum = 0;
for (i=0; i<100; i++) {
  temp = randomSentence();
  sum += temp.length;
  console.log(temp);
}
console.log(sum/100);