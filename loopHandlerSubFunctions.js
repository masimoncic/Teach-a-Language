loopHandlerSubFunctions = {
  addNoun() {
    return loopHandlerFunctions.addWord(language.nouns);
  },

  addTrans() {
    return loopHandlerFunctions.addWord(language.transitiveVerbs);
  },

  addIntrans(){
    return loopHandlerFunctions.addWord(language.intransitiveVerbs);
  },

  addAdj() {
    return loopHandlerFunctions.addWord(language.adjectives);
  },

  addAdv() {
    return loopHandlerFunctions.addWord(language.adverbs);
  },

  nounFreq() {
    return loopHandlerFunctions.increaseFreq(language.nouns);
  },

  adjFreq() {
    return loopHandlerFunctions.increaseFreq(language.adjectives);
  },

  advFreq() {
    return loopHandlerFunctions.increaseFreq(language.adverbs);
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
    return loopHandlerFunctions.banWord(language.determiners, language.nouns);
  },

  banAdjNoun() {
    return loopHandlerFunctions.banWord(language.adjectives, language.nouns);
  },

  banNounVerb() {
    return loopHandlerFunctions.banWord(language.nouns, language.transitiveVerbs);
  },

  banVerbAdv() {
    return loopHandlerFunctions.banWord(language.adverbs, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banIntAdj() {
    return loopHandlerFunctions.banWord(language.intensifiers, language.adjectives);
  },

  banIntAdv() {
    return loopHandlerFunctions.banWord(language.intensifiers, language.adjectives);
  }




}