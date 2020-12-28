const language = {
  
  
  
  /*
  determiners: [
    {name: 'the', freq: 10, banned: []},
    {name: 'a', freq: 10, banned: []},
    {name: 'some', freq: 2, banned: []},
    {name: 'every', freq: 2, banned: []},
    {name: 'all', freq: 1, banned: []},
    {name: 'several', freq: 1, banned: []},
    {name: 'most', freq: 1, banned: []},
    {name: 'few', freq: 2, banned: []}
  ],
  intensifiers: [
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
  
  ],
  adjectives: [],
  nouns : [],
  transitiveVerbs: [],
  intransitiveVerbs: [],
  adverbs: [],
*/
  // for testing
    determiners: [
    {name: 'the', freq: 10, banned: []},
    {name: 'a', freq: 10, banned: []},
    {name: 'some', freq: 2, banned: []},
    {name: 'every', freq: 2, banned: []},
    {name: 'all', freq: 1, banned: []},
    {name: 'several', freq: 1, banned: []},
    {name: 'most', freq: 1, banned: []},
    {name: 'few', freq: 2, banned: []}
  ],
  intensifiers: [
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
  
  ],
adjectives: [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}],
  nouns : [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}],
  transitiveVerbs: [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}],
  intransitiveVerbs: [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}],
  adverbs: [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}],




  /*randomWord takes a word-type array and picks a random word, weighted by
  the freq properties of each word.
  The word is chosen in randomWordHelper. The second argument is an arary of the form
  word.banned for a given word object.  If the word picked by randomWordHelper is in
  word.banned, then randomWord will recusively call randomWordHelper until a non-banned
  word is called.  To prevent an infinite loop, this is capped at 20 iterations
  of the helper function, at which point
  randomWord will return ''.
  */

  randomWord(arr, banCheck=null) {
      let i = 0;
      let val = this.randomWordHelper(arr, banCheck);
      while(val === null){
        val = this.randomWordHelper(arr, banCheck);
        i++;
        if (i > 20) {
          return '';
        }
      }
      return val;

  },


  randomWordHelper (arr, banCheck=null) {
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
  },

  

  randomSentence () {
    let noun1 = this.randomWord(this.nouns) + ' ';
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
        det1 = this.randomWord(this.determiners, noun1) + ' ';
    }
    if (Math.random() > 0.45) {
        adj1 = this.randomWord(this.adjectives, noun1) + ' ';
        if(Math.random() > 0.7) {
          intens1 = this.randomWord(this.intensifiers, adj1) + ' ';
        }
    }
    if (Math.random() > 0.35) {
        verb = this.randomWord(this.transitiveVerbs) + ' ';
        noun2 = this.randomWord(this.nouns) + ' ';
        if (Math.random() > 0.45) {
            adj2 = this.randomWord(this.adjectives, noun2) + ' ';
            if(Math.random() > 0.7) {
              intens2 = this.randomWord(this.intensifiers, adj2) + ' ';
            }
        }
        if (Math.random() > 0.4) {
            det2 = this.randomWord(this.determiners, noun2) + ' ';
        }
    } else {
        verb = this.randomWord(this.intransitiveVerbs) + ' ';
    }
    if (Math.random() > 0.45) {
        adv = this.randomWord(this.adverbs, verb) + ' ';
        if(Math.random() > 0.7) {
          intens3 = this.randomWord(this.intensifiers, adv) + ' ';
        }
    }
    let sent = det1 + intens1 + adj1 + noun1 + verb + intens3 + adv + det2 + intens2 + adj2 + noun2;
    return sent[0].toUpperCase() + sent.slice(1, sent.length-1) +'.';
  }

}