/*Tests are done with a margin of error, meaning that some tests are expected to fail if the program
is running correctly.  Expected passing rate is commented above each test */

const assert = require('assert');
const { randomWord } = require('./randomSentence');

//pass rate: 96%
it('Random Word, equal frequencies', () => {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let freqCount = {a:0, b:0, c:0, d:0};

  for (i=0; i < 1000; i++) {
    let temp = randomWord(testData);
    freqCount[temp] += 1;
  }
  console.log(freqCount);
  let freqVals = Object.values(freqCount);
  results = freqCount.a > 214 && freqCount.a < 286
    && freqCount.b > 214 && freqCount.b < 286 
    &&freqCount.c > 214 && freqCount.c < 286
    &&freqCount.d > 214 && freqCount.d < 286
  assert.strictEqual(results, true, `Expected frequencies in range: [214-286, 214-286, 214-286, 214-286]. 
  \n Actual frequences: ${freqVals}`);
  
})



it('Random Word, equal frequencies', () => {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let freqCount = {a:0, b:0, c:0, d:0};

  for (i=0; i < 1000; i++) {
    let temp = randomWord(testData);
    freqCount[temp] += 1;
  }
  console.log(freqCount);
  let freqVals = Object.values(freqCount);
  let results = freqCount.a > 214 && freqCount.a < 286
    && freqCount.b > 214 && freqCount.b < 286 
    &&freqCount.c > 214 && freqCount.c < 286
    &&freqCount.d > 214 && freqCount.d < 286
  assert.strictEqual(results, true, `Expected frequencies in range: [214-286, 214-286, 214-286, 214-286]. 
  \n Actual frequences: ${freqVals}`);
  
})

it('Random Word, equal frequencies', () => {
  let testData = [{name: 'a', freq: 25, banned: []}, {name: 'b', freq: 25, banned: []}, 
  {name: 'c', freq: 25, banned: []}, {name: 'd', freq: 25, banned: []}];

  let passFail = {pass: 0, fail: 0};
  for(let j =0; j < 100; j++) {
    let freqCount = {a:0, b:0, c:0, d:0};

    for (i=0; i < 1000; i++) {
      let temp = randomWord(testData);
      freqCount[temp] += 1;
    }
    let results = freqCount.a > 214 && freqCount.a < 286
    && freqCount.b > 214 && freqCount.b < 286 
    &&freqCount.c > 214 && freqCount.c < 286
    &&freqCount.d > 214 && freqCount.d < 286;
    if (results) {passFail.pass += 1;} else {passFail.fail +=1;};
  }
  console.log(passFail);
  let results = passFail.fail < 5;
  assert.strictEqual(results, true, `expected test to pass 96 out of 100 tries. \n
  passes: ${passFail.pass}, fails: ${passFail.fail}`)
})