
/*
the loop proceeds as follows: 
Stage 1: randomizeOptionButtons is called to
give the user 4 options; the helper function createOptionButton calls 
loopOptionButtonHandler to create event handlers for those options.  
Stage 2: The user clicks one of the options.  loop.createLoopInputs 
is called to create 1 or 2 input fields and another button; it then
returns a function which is passed into the event handler of the
new button. When the user presses the new button, it runs the function
it recieved, then runs randomizeOptionButtons again to return to stage 1.
*/

function loopSubmitButtonHandler(func) {
  return function () {
  func();
  loopSubmitContainer.innerHTML = '';
  randomizeOptionButtons()};

}

function loopOptionButtonHandler (n) {
  return function () {
  loopOptionsContainer.innerHTML = '';
  button = document.createElement('button');
  button.id = 'loop-submit-button';
  button.innerText = 'Submit';
  //loopSubmitContainer.hidden = false;
  //add event handler for button
  let functionForHandler = loop.createLoopInputs(n)
  let handler = loopSubmitButtonHandler(functionForHandler);
  loopSubmitContainer.appendChild(button);
  button.addEventListener('click', handler)
  };
}

function createOptionButton(n, str) {
  let button = document.createElement('button');
  button.innerText = str;
  button.class = 'option-button';
  loopOptionsContainer.appendChild(button);
  let handler = loopOptionButtonHandler(n);
  button.addEventListener('click', handler);
}


function randomizeOptionButtons () {
  //this is the start of the loop, so we generate a new sentence
  language.complexity ++;
  sentenceBox.innerText = language.randomSentence();
  //button 1: nouns
  if (Math.random() > 0.5) {
    createOptionButton(0, 'Teach a new noun');
  }
  else {
    createOptionButton(1, 'Increase usage frequency of a known noun')
  }

  //button 2: verbs
  let verbRandom = Math.random();

  if (verbRandom > 0.75) {
    createOptionButton(2, 'Teach a new intransitive verb');
  }
  else if (verbRandom > 0.35) {
    createOptionButton(3, 'Teach a new transitive verb');
  }
  else {
    createOptionButton(4, 'Incease the usage frequence of a known verb')
  }

  //button 3: Adjectives / Adverbs
  let adjRandom = Math.random();

  if (adjRandom > 0.7) {
    createOptionButton(5, 'Teach a new adjective');
  }
  else if (adjRandom > 0.4) {
    createOptionButton(6, 'Increase the usage frequence of a known adjective');
  }
  else if (adjRandom > 0.2) {
    createOptionButton(7, 'Teach a new adverb');
  } 
  else {
    createOptionButton(8, 'Increase the usage frequency of a known adverb');
  }

  //button 4: bans
  let banRandom = Math.random();

  if (banRandom > 0.8) {
    createOptionButton(9, 'Ban cominbation: determiner and noun');
  }
  else if (banRandom > 0.6) {
    createOptionButton(10, 'Ban combination: adjective and noun');
  }
  else if (banRandom > 0.4) {
    createOptionButton(11, 'Ban combination: noun and verb');
  }
  else if (banRandom > 0.2) {
    createOptionButton(12, 'Ban combination: verb and adverb');
  }
  else if (banRandom > 0.1) {
    createOptionButton(13, 'Ban combination: intensifier and adjective');
  }
  else {
    createOptionButton(14, 'Ban combination: intensifier and adverb');
  }

}






