/*Tests are done with a margin of error, meaning that some tests are expected to fail if the program
is running correctly.  Expected passing rate is commented above each test */

const assert = require('assert');
const { randomWord } = require('./randomWord')

function RandomWordEqualFreqs() {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let freqCount = {a:0, b:0, c:0, d:0};

  for (i=0; i < 100000; i++) {
    let temp = randomWord(testData);
    freqCount[temp] += 1;
  }
    return freqCount;
}

//pass rate: 99.2%
it('Random Word, equal frequencies', () => {
  let freqCount = RandomWordEqualFreqs();
  console.log(freqCount);
  let freqVals = Object.values(freqCount);
  let results = freqCount.a > 24580 && freqCount.a < 25430
    && freqCount.b > 24580 && freqCount.b < 25430 
    &&freqCount.c > 24580 && freqCount.c < 25430
    &&freqCount.d > 24580 && freqCount.d < 25430;
  assert.strictEqual(results, true, `Expected frequencies in range: [24580-25430, 24580-25430, 24580-25430, 24580-25430]. 
  \n Actual frequences: ${freqVals}`);
  
})

//uncomment to run test 100 times and log pass/fail rate

it('Random Word, equal frequencies 100 trials', () => {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let passFail = {pass: 0, fail: 0};
  for(let j =0; j < 100; j++) {
    let freqCount = RandomWordEqualFreqs();
    let results = freqCount.a > 24580 && freqCount.a < 25430
      && freqCount.b > 24580 && freqCount.b < 25430 
      &&freqCount.c > 24580 && freqCount.c < 25430
      &&freqCount.d > 24580 && freqCount.d < 25430;
    if (results) {passFail.pass += 1;} else {passFail.fail +=1;};
  }
  console.log(passFail);
  let results = passFail.fail < 3;
  assert.strictEqual(results, true, `expected test to pass 99 out of 100 tries. \n
  passes: ${passFail.pass}, fails: ${passFail.fail}`)
})




function RandomWordUnequalFreqs() {
  let testData = [{name: 'a', freq: 10, banned: []}, {name: 'b', freq: 20, banned: []}, 
  {name: 'c', freq: 30, banned: []}, {name: 'd', freq: 40, banned: []}];

  let freqCount = {a:0, b:0, c:0, d:0};

  for (i=0; i < 100000; i++) {
    let temp = randomWord(testData);
    freqCount[temp] += 1;
  }
    return freqCount;
}

it('Random Word, unequal frequencies', () => {
  let freqCount = RandomWordUnequalFreqs();
  console.log(freqCount);
  let freqVals = Object.values(freqCount);
  let results = freqCount.a > 9710 && freqCount.a < 10300
    && freqCount.b > 19610 && freqCount.b < 20390
    &&freqCount.c > 29550 && freqCount.c < 30450
    &&freqCount.d > 39520 && freqCount.d < 40480;
  assert.strictEqual(results, true, `Expected frequencies in range: 
  [9710-10300, 19610-20390, 29550-30450, 39520-40480]. 
  \n Actual frequences: ${freqVals}`);
  
})

// uncomment to run test 100 times and log pass/fail rate

it('Random Word, equal frequencies 100 trials', () => {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let passFail = {pass: 0, fail: 0};
  for(let j =0; j < 100; j++) {
    let freqCount = RandomWordUnequalFreqs();
    let results = freqCount.a > 9710 && freqCount.a < 10300
      && freqCount.b > 19610 && freqCount.b < 20390
      &&freqCount.c > 29550 && freqCount.c < 30450
      &&freqCount.d > 39520 && freqCount.d < 40480;
    if (results) {passFail.pass += 1;} else {passFail.fail +=1;};
  }
  console.log(passFail);
  let results = passFail.fail < 3;
  assert.strictEqual(results, true, `expected test to pass 99 out of 100 tries. \n
  passes: ${passFail.pass}, fails: ${passFail.fail}`)
}) 




function randomWordBanned() {
  let testData = [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
  {name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}];

  let freqCount = {a:0, b:0, c:0, d:0};

  for (i=0; i < 100000; i++) {
    let temp = randomWord(testData, 'g4');
    freqCount[temp] += 1;
  }
    return freqCount;
}

//pass rate: 99.2%
it('Random Word, equal frequencies, 4th word banned pair', () => {
  let freqCount = randomWordBanned();
  console.log(freqCount);
  let freqVals = Object.values(freqCount);
  let results = freqCount.a > 32870 && freqCount.a < 33800
    && freqCount.b > 32870 && freqCount.b < 33800 
    &&freqCount.c > 32870 && freqCount.c < 33800
    &&freqCount.d === 0;
  assert.strictEqual(results, true, `Expected frequencies in range: [32870-33800, 32870-33800, 32870-33800, 0]. 
  \n Actual frequences: ${freqVals}`);
  
})

//uncomment to run test 100 times and log pass/fail rate

it('Random Word, equal frequencies, 4th word banned pair; 100 trials', () => {
  let passFail = {pass: 0, fail: 0};
  for(let j =0; j < 100; j++) {
    let freqCount = randomWordBanned();
    let results = freqCount.a > 32870 && freqCount.a < 33800
      && freqCount.b > 32870 && freqCount.b < 33800 
      &&freqCount.c > 32870 && freqCount.c < 33800
      &&freqCount.d === 0;
    if (results) {passFail.pass += 1;} else {passFail.fail +=1;};
  }
  console.log(passFail);
  let results = passFail.fail < 3;
  assert.strictEqual(results, true, `expected test to pass 99 out of 100 tries. \n
  passes: ${passFail.pass}, fails: ${passFail.fail}`)
})


/*it('test randomSentence length', () => {
  const randomWord = require('./randomSentence');
  let nouns = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let determiners = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let transitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let intransitiveVerbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let adjectives = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];
  let adverbs = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let sum = 0;
  for (i = 0; i < 10000; i++) {
    sum =+ randomSentence().length;
  }
  let avg = sum/10000;
  console.log(avg);

})
*/