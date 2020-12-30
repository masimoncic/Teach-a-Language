loop = {

  functionFinder: 0,

  //create form and input based on n.  Returns the function that will be
  //used as an event handler for the submit button.
  createLoopInputs(n) {
    let label1= document.createElement('label');
    label1.for = 'loop-input1';
    label1.id = 'loop-label1';
    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.id = 'loop-input1';
    loopSubmitContainer.append(label1, input1);
    if(n < 9) {
      if (n === 0) {
        label1.innerText = 'Enter a noun';
        return this.addNoun;
      }
      else if (n === 1) {
        label1.innerText = 'Enter a noun';
        return this.nounFreq;
      }
      else if (n === 2) {
        label1.innerText = 'Enter an intransitive verb';
        return this.addTrans;
      }
      else if (n === 3) {
        label1.innerText = 'Enter a transitive verb';
        return this.addIntrans;
      }
      else if (n === 4) {
        label1.innerText = 'Enter a verb';
        return this.verbFreq;
      }
      else if (n === 5) {
        label1.innerText = 'Enter an adjective';
        return this.addAdj
      }
      else if (n === 6) {
        label1.innerText = 'Enter an adjective';
        return this.adjFreq;
      }
      else if (n === 7) {
        label1.innerText = 'Enter an adverb';
        return this.addAdv;
      }
      else if (n === 8) {
        label1.innerText = 'Enter an adverb';
        return this.advFreq;
      }

      else {
        let label2= document.createElement('label');
        label2.for = 'loop-input2';
        label2.id = 'loop-label2';
        let input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.id = 'loop-input1';
        loopSubmitContainer.append(label2, input2);
      }
        if (n === 9) {
          label1.innerText = 'Enter a determiner';
          label2.innerText = 'Enter a noun';
          return this.banDetNoun;
        }
        else if (n === 10) {
          label1.innerText = 'Enter an adjective';
          label2.innerText = 'Enter a noun';
          return this.banAdjNoun;
        }
        else if (n === 11) {
          label1.innerText = 'Enter a noun';
          label2.innerText = 'Enter a verb';
          return this.banNounVerb;
        }
        else if (n === 12) {
          label1.innerText = 'Enter a verb';
          label2.innerText = 'Enter an adverb';
          return this.banVerbAdv;
        }
        else if (n === 13) {
          label1.innerText = 'Enter an intensifier';
          label2.innerText = 'Enter an adjective';
          return this.banIntAdj;
        }
        else if (n === 14) {
          label1.innerText = 'Enter an intensifier';
          label2.innerText = 'Enter an adverb';
          return this.banIntAdv;
        }


    
    }
  },


  addWord(wordType) {
    input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let word in wordType) {
      if (inputVal === word.name) {
        return;
        //display message
      }
      wordType.push({
        name: inputVal,
        freq: 10,
        banned: [],
      })
      //cleanup function
    }
  },

  addNoun() {
    return this.addWord(language.nouns);
  },

  addTrans() {
    return this.addWord(language.transitiveVerbs);
  },

  addIntrans(){
    return this.addWord(language.intransitiveVerbs);
  },

  addAdj() {
    return this.addWord(language.adjectives);
  },

  addAdv() {
    return this.addWord(language.adverbs);
  },

  increaseFreq(wordType) {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let word in wordType) {
      if(word.name === inputVal) {
        word.freq += 10;
        //clean up function
        return;
      }
    }
    //if word not found, display message
    return;
  },

  verbFreq() {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let word in language.intransitiveVerbs) {
      if(word.name === inputVal) {
        word.freq += 10;
        //clean up function
        return;
      }
    }
    for (let word in language.transitiveVerbs) {
      if(word.name === inputVal) {
        word.freq += 10;
        //clean up function
        return;
    }
    //display message
    return;
    }
  },

  nounFreq() {
    return this.increaseFreq(language.nouns);
  },

  adjFreq() {
    return this.increaseVerbFreq(language.adjectives);
  },

  advFreq() {
    return this.increaseVerbFreq(language.adverbs);
  },

  banWord(wordType1, wordType2) {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    let input2 = document.getElementById('loop-input2');
    let input2Val = input2.value;
    for (let word in wordType1) {
      if(word.name === inputVal) {
        word.banned.push(input2Val);
      }
    }
    for (let word in wordType2) {
      if(word.name === inputVal) {
        word.banned.push(input1Val);
        //clean up function
      }
    }
    //clean up function
  },

  banVerb(wordType1, wordType2, wordType3) {
    banWord(wordType1, wordType2);
    banWord(wordType1, wordType3);
  },

  banDetNoun() {
    return this.banWord(language.determiners, language.nouns);
  },

  banAdjNoun() {
    return this.banWord(language.adjectives, language.nouns);
  },

  banNounVerb() {
    return this.banVerb(language.nouns, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banVerbAdv() {
    return this.banVerb(language.adverbs, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banIntAdj() {
    return this.banWord(language.intensifiers, language.adjectives);
  },

  banIntAdv() {
    return this.banWord(language.intensifiers, language.adjectives);
  }








}