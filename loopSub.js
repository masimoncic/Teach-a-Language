loopSub = {
  addNoun() {
    return loop.addWord(language.nouns);
  },

  addTrans() {
    return loop.addWord(language.transitiveVerbs);
  },

  addIntrans(){
    return loop.addWord(language.intransitiveVerbs);
  },

  addAdj() {
    return loop.addWord(language.adjectives);
  },

  addAdv() {
    return loop.addWord(language.adverbs);
  },

  nounFreq() {
    return loop.increaseFreq(language.nouns);
  },

  adjFreq() {
    return loop.increaseFreq(language.adjectives);
  },

  advFreq() {
    return loop.increaseFreq(language.adverbs);
  },

  verbFreq() {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let i =0; i < language.intransitiveVerbs.length; i++) {
      if(language.intransitiveVerbs[i].name === inputVal) {
        language.intransitiveVerbs[i].freq += 10;
        //clean up function
        return;
      }
    }
    for (let i =0; i < language.transitiveVerbs.length; i++) {
      if(language.transitiveVerbs.name === inputVal) {
        language.transitiveVerbs.freq += 10;
        //clean up function
        return;
    }
    //display message
    return;
    }
  },
  
  /*
  needs to be refactored to avoid problems with 'this'
  banVerb(wordType1, wordType2, wordType3) {
    banWord(wordType1, wordType2);
    banWord(wordType1, wordType3);
  },

  */

  banDetNoun() {
    return loop.banWord(language.determiners, language.nouns);
  },

  banAdjNoun() {
    return loop.banWord(language.adjectives, language.nouns);
  },

  banNounVerb() {
    return loop.banWord(language.nouns, language.transitiveVerbs);
  },

  banVerbAdv() {
    return loop.banWord(language.adverbs, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banIntAdj() {
    return loop.banWord(language.intensifiers, language.adjectives);
  },

  banIntAdv() {
    return loop.banWord(language.intensifiers, language.adjectives);
  }




}