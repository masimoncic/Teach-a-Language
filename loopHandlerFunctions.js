loopHandlerFunctions = {

  functionFinder: 0,

  //create form and input based on n.  Returns the function that will be
  //used as an event handler for the submit button.
  createLoopInputs(n) {
    let label1= document.createElement('label');
    label1.for = 'loop-input1';
    label1.id = 'loop-label1';
    label1.className = 'input-header'
    let input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.id = 'loop-input1';
    loopSubmitContainer.append(label1, input1);
      if (n === 0) {
        label1.innerText = 'Enter a noun';
        return loopHandlerSubFunctions.addNoun;
      }
      else if (n === 1) {
        label1.innerText = 'Enter a noun';
        return loopHandlerSubFunctions.nounFreq;
      }
      else if (n === 2) {
        label1.innerText = 'Enter an intransitive verb';
        return loopHandlerSubFunctions.addTrans;
      }
      else if (n === 3) {
        label1.innerText = 'Enter a transitive verb';
        return loopHandlerSubFunctions.addIntrans;
      }
      else if (n === 4) {
        label1.innerText = 'Enter a verb';
        return loopHandlerSubFunctions.verbFreq;
      }
      else if (n === 5) {
        label1.innerText = 'Enter an adjective';
        return loopHandlerSubFunctions.addAdj
      }
      else if (n === 6) {
        label1.innerText = 'Enter an adjective';
        return loopHandlerSubFunctions.adjFreq;
      }
      else if (n === 7) {
        label1.innerText = 'Enter an adverb';
        return loopHandlerSubFunctions.addAdv;
      }
      else if (n === 8) {
        label1.innerText = 'Enter an adverb';
        return loopHandlerSubFunctions.advFreq;
      };

        let label2= document.createElement('label');
        label2.for = 'loop-input2';
        label2.id = 'loop-label2';
        label2.className = 'input-header'
        let input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.id = 'loop-input2';
        loopSubmitContainer.append(label2, input2);
      
        if (n === 9) {
          label1.innerText = 'Enter a determiner';
          label2.innerText = 'Enter a noun';
          return loopHandlerSubFunctions.banDetNoun;
        }
        else if (n === 10) {
          label1.innerText = 'Enter an adjective';
          label2.innerText = 'Enter a noun';
          return loopHandlerSubFunctions.banAdjNoun;
        }
        else if (n === 11) {
          label1.innerText = 'Enter a noun';
          label2.innerText = 'Enter a verb';
          return loopHandlerSubFunctions.banNounVerb;
        }
        else if (n === 12) {
          label1.innerText = 'Enter a verb';
          label2.innerText = 'Enter an adverb';
          return loopHandlerSubFunctions.banVerbAdv;
        }
        else if (n === 13) {
          label1.innerText = 'Enter an intensifier';
          label2.innerText = 'Enter an adjective';
          return loopHandlerSubFunctions.banIntAdj;
        }
        else if (n === 14) {
          label1.innerText = 'Enter an intensifier';
          label2.innerText = 'Enter an adverb';
          return loopHandlerSubFunctions.banIntAdv;
        }


    
    },


  addWord(wordType) {
    input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let i=0; i < wordType.length; i++) {
      if (inputVal === wordType[i].name) {
        return;
        //display message
      }

      //cleanup function
    }
    wordType.push({
      name: inputVal,
      freq: 10,
      banned: [],
    })
  },

  /*
  addNoun() {
    return loopHandlerSubFunctions.addWord(language.nouns);
  },

  addTrans() {
    return loopHandlerSubFunctions.addWord(language.transitiveVerbs);
  },

  addIntrans(){
    return loopHandlerSubFunctions.addWord(language.intransitiveVerbs);
  },

  addAdj() {
    return loopHandlerSubFunctions.addWord(language.adjectives);
  },

  addAdv() {
    return loopHandlerSubFunctions.addWord(language.adverbs);
  },
  */

  increaseFreq(wordType) {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let i=0; i < wordType.length; i++) {
      if(wordType[i].name === inputVal) {
        wordType[i].freq += 10;
        //clean up function
        return;
      }
    }
    //if word not found, display message
    return;
  },

  /*
  verbFreq() {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    for (let word in language.intransitiveVerbs) {
      if(wordType[i].name === inputVal) {
        word.freq += 10;
        //clean up function
        return;
      }
    }
    for (let word in language.transitiveVerbs) {
      if(wordType[i].name === inputVal) {
        wordType[i].freq += 10;
        //clean up function
        return;
    }
    //display message
    return;
    }
  },
*/
  /*
  nounFreq() {
    return loopHandlerSubFunctions.increaseFreq(language.nouns);
  },

  adjFreq() {
    return loopHandlerSubFunctions.increaseVerbFreq(language.adjectives);
  },

  advFreq() {
    return loopHandlerSubFunctions.increaseVerbFreq(language.adverbs);
  },
  */

  banWord(wordType1, wordType2) {
    let input = document.getElementById('loop-input1');
    let inputVal = input.value;
    let input2 = document.getElementById('loop-input2');
    let input2Val = input2.value;
    for (let i=0; i < wordType1.length; i++) {
      if(wordType1[i].name === inputVal) {
        wordType1[i].banned.push(input2Val);
        for(let i=0; i < wordType2.length; i++) {
          if(wordType2[i].name === input2Val) {
            wordType2[i].banned.push(inputVal);
          }
        }
      }
    }
    for (let i=0; i < wordType2.length; i++) {
      if(wordType2[i].name === inputVal) {
        wordType2[i].banned.push(inputVal);
        for(let i=0; i < wordType1.length; i++) {
          wordType1[i].banned.push(input2Val);
        }
        //clean up function
      }
    }
    //clean up function
  },
  /*
  banVerb(wordType1, wordType2, wordType3) {
    banWord(wordType1, wordType2);
    banWord(wordType1, wordType3);
  },

  banDetNoun() {
    return loopHandlerSubFunctions.banWord(language.determiners, language.nouns);
  },

  banAdjNoun() {
    return loopHandlerSubFunctions.banWord(language.adjectives, language.nouns);
  },

  banNounVerb() {
    return loopHandlerSubFunctions.banVerb(language.nouns, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banVerbAdv() {
    return loopHandlerSubFunctions.banVerb(language.adverbs, language.transitiveVerbs, language.intransitiveVerbs);
  },

  banIntAdj() {
    return loopHandlerSubFunctions.banWord(language.intensifiers, language.adjectives);
  },

  banIntAdv() {
    return loopHandlerSubFunctions.banWord(language.intensifiers, language.adjectives);
  }

  */





}