module.exports = {
  randomWord(arr, banCheck=null) {
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
      return '';
    }
    let val = randomWordHelper(arr, banCheck);
    while (val === null) {
      val = randomWordHelper(arr, banCheck);
    }
    return val;
  }

  function randomSentence() {
    let noun1 = randomWord(nouns);
    let det1 = '';
    let verb = '';
    let noun2 = '';
    let adj1 = '';
    let adj2 = '';
    let adv = '';
    let det2 = '';
    if (Math.random > 0.5) {
        det1 = randomWord(determiners, noun);
    }
    if (det1) {
        det1 = det1[0].toUpper() + det1.slice(1);
    }else {
        noun1 = noun1[0].toUpper() + noun1.slice(1);
    }
    if (Math.random() > 0.75) {
        adj1 = randomWord(adjectives, noun1);
    }
    if (Math.random > 0.5) {
        verb = randomWord(transitiveVerbs);
        noun2 = randomWord(nouns);
        if (Math.random() > 0.75) {
            adj2 = randomWord(adjectives, noun2);
        }
        if (Math.random() > 0.5) {
            det2 = ranomWord(determiners, noun2);
        }
    } else {
        verb = randomWord(intransitiveVerbs);
    }
    if (Math.random() > 0.65) {
        adv = randomWord(adverbs, verb);
    }
  
    return det1 + adj1 + noun1 + verb + adv + det2 + adj2 + noun2;
  }
}

