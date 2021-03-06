

startingWords = {
  //createForm is a helper function for our other functions.
  //It will create a form with n amount of inputs for the given word type.
  //word type should be  a string.
  createForm(n, wordType) {
    //delete the previous form.
    formContainer = document.getElementById('form-container');
    formContainer.innerHTML = '';
    let div = document.createElement('div');
    div.class = 'form-sub-container';
    
    //create form title
    let h1 = document.createElement('h1');
    h1.innerText = `Teach the robot ${n} ${wordType}.`
    h1.className = 'display-6 col-3 input-header'
    let form = document.createElement('div')
    //form.setAttribute('action', '');
    
    //create n number of inputs
    for (i=0; i < n; i++) {
      let input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.id = `${wordType}${i}`;
      //append input
      form.appendChild(input);
    }

    
    //create submit button
    let button = document.createElement('button');
    //button.setAttribute('type', 'submit');
    button.className = 'button btn btn-warning start-button';
    button.id = `start-${wordType}-button`;
    button.innerText = `Teach ${wordType}`

    //append everything else
    form.appendChild(button);
    div.append(h1, form);
    formContainer.appendChild(div);

  },

  createNouns() {
    //create input fields
    this.createForm(4, 'nouns');
    //create event button and event listener
    let currentButton = document.getElementById('start-nouns-button');
    currentButton.addEventListener('click', startingWords.handleNouns);
  },

  //define noun button's event handler
  handleNouns() {
    //read user inputs
    for (i=0; i < 4; i++){
      let word = document.getElementById(`nouns${i}`);
      //store user inputs as word objects
      language.nouns.push({name: word.value, freq: 10, banned: [],})
    }
    //remove event listener
    let currentButton = document.getElementById('start-nouns-button');
    currentButton.removeEventListener('click', startingWords.handleNouns);
    //call next function
    boundIntrans();

  },

  //these follow the same pattern as createNouns and handleNouns
  createIntrans() {
    this.createForm(2, 'intransitive verbs');
    let currentButton = document.getElementById('start-intransitive verbs-button');
    currentButton.addEventListener('click', startingWords.handleIntrans);
  },

  handleIntrans() {
    for (i=0; i < 2; i++){
      let word = document.getElementById(`intransitive verbs${i}`);
      language.intransitiveVerbs.push({name: word.value, freq: 10, banned: [],})
    }

    let currentButton = document.getElementById('start-intransitive verbs-button');
    currentButton.removeEventListener('click', startingWords.handleIntrans);

    boundTrans();
  },

  createTrans() {
    this.createForm(2, 'transitive verbs');
    let currentButton = document.getElementById('start-transitive verbs-button');
    currentButton.addEventListener('click', startingWords.handleTrans);
  },

  handleTrans() {
    for (i=0; i < 2; i++){
      let word = document.getElementById(`transitive verbs${i}`);
      language.transitiveVerbs.push({name: word.value, freq: 10, banned: [],})
    }

    let currentButton = document.getElementById('start-transitive verbs-button');
    currentButton.removeEventListener('click', startingWords.handleTrans);

    boundAdj();
  },

  createAdj() {
    this.createForm(2, 'adjectives');
    let currentButton = document.getElementById('start-adjectives-button');
    currentButton.addEventListener('click', startingWords.handleAdj);
  },

  handleAdj() {
    for (i=0; i < 2; i++){
      let word = document.getElementById(`adjectives${i}`);
      language.adjectives.push({name: word.value, freq: 10, banned: [],})
    }

    let currentButton = document.getElementById('start-adjectives-button');
    currentButton.removeEventListener('click', startingWords.handleAdj);

    boundAdv();
  },

  createAdv() {
    this.createForm(2, 'adverbs');
    let currentButton = document.getElementById('start-adverbs-button');
    currentButton.addEventListener('click', startingWords.handleAdv);
  },

  handleAdv() {
    for (i=0; i < 2; i++){
      let word = document.getElementById(`adverbs${i}`);
      language.adverbs.push({name: word.value, freq: 10, banned: [],})
    }

    let currentButton = document.getElementById('start-adverbs-button');
    currentButton.removeEventListener('click', startingWords.handleAdv);
    formContainer.innerHTML = '';

    //this is the end of the starting sequence, so it falls the function to begin the main loop
    loop.randomizeOptionButtons();
    
  },


}