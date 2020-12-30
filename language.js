const language = {
  //complexity is used in randomSentence.  It is responsible for
  //deciding the odds of elements appearing in a sentence.  
  //Complexity goes up for each cycle of the loop.
  complexity: 0,

  //wordType keys are arrays that store objects of the given type.
  //objects have three components: 'name' is the word itself, 
  //'freq' determiens the relative frequency that the word will appear
  //'banned' contains an array of all words which cannot appear in combination
  //with the given word.
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
  conjunctions : [
    {name: 'and', freq: 10, banned: []},
    {name: 'or', freq: 10, banned: []},
    {name: 'if', freq: 10, banned: []},
    {name: 'when', freq: 10, banned: []},
    {name: 'because', freq: 20, banned: []},
    {name: 'but', freq: 10, banned: []},
  ],
  adjectives: [],
  nouns : [],
  transitiveVerbs: [],
  intransitiveVerbs: [],
  adverbs: [],
  // for testing
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
*/



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



  // randomSentenceHelper checks the complexity value against rolls
  //of Math.random to decide if a given part of speech will be 
  //present in a sentence.  If it is, randomWord is called to
  //determine the word.
  //randomSentence also compares rolls of Math.random against complexity
  //values to decide if the sentence will contain a relative clause.  
  //this process repeats to create sentences with an arbitrary number of
  //relative clauses.  
  
  randomSentence () {
    let sentenceArray = []
    let sentence1 = this.randomSentenceHelper();
    //sentence Array tracks each relative clause generated
    sentenceArray.push(sentence1);
    let num = Math.random();
    //loop continues to generate relative clauses until it fails to meet
    //the random check.
    while(num < Math.min(.85, this.complexity)) {
      let conj = this.randomWord(this.conjunctions);
      sentenceArray.push(conj);
      tempSentence = this.randomSentenceHelper();
      sentenceArray.push(tempSentence);
      num = Math.random();
    }
    joinedSentence = sentenceArray.join(' ');
    //change the first letter to uppercase and replace the last ',' with a '.'
    fullSentence = joinedSentence[0].toUpperCase() + joinedSentence.slice(1, joinedSentence.length -1) + '.';
    return fullSentence;
  },


  randomSentenceHelper () {
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
    if (Math.random() < Math.min(.90, this.complexity * 2)) {
        det1 = this.randomWord(this.determiners, noun1) + ' ';
    }
    if (Math.random() < Math.min(.90, this.complexity * 2)) {
        adj1 = this.randomWord(this.adjectives, noun1) + ' ';
        if(Math.random() > this.complexity * 0.4) {
          intens1 = this.randomWord(this.intensifiers, adj1) + ' ';
        }
    }
    if (Math.random() < Math.min(.6, .2 + this.complexity *1)) {
        verb = this.randomWord(this.transitiveVerbs, noun1) + ' ';
        noun2 = this.randomWord(this.nouns, verb) + ' ';
        if (Math.random() < Math.min(.90, this.complexity * 2)) {
            adj2 = this.randomWord(this.adjectives, noun2) + ' ';
            if(Math.random() < Math.min(.80, this.complexity * 0.4)) {
              intens2 = this.randomWord(this.intensifiers, adj2) + ' ';
            }
        }
        if (Math.random() < Math.min(.90, this.complexity * 2)) {
            det2 = this.randomWord(this.determiners, noun2) + ' ';
        }
    } else {
        verb = this.randomWord(this.intransitiveVerbs, noun1) + ' ';
    }
    if (Math.random() < Math.min(.90, this.complexity *1.5)) {
        adv = this.randomWord(this.adverbs, verb) + ' ';
        if(Math.random() < Math.min(.80, this.complexity *0.4)) {
          intens3 = this.randomWord(this.intensifiers, adv) + ' ';
        }
    }
    
    let sentence = det1 + intens1 + adj1 + noun1 + intens3 + adv + verb  + det2 + intens2 + adj2 + noun2;
    //remove the last ' ' and replace it with a ','.
    return sentence.slice(0, sentence.length -1) + ',';
  }

}