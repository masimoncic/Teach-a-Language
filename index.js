function randomWord(arr, banCheck=[]) {
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
          if(banCheck.includes(j.name)) {
              randomWord(arr, banCheck);
          }
          else {
            return j.name;
          }
      }
  }
  return '';
}

let testData = [{name: 'a', freq: 25, banned: ['g1']}, {name: 'b', freq: 25, banned: ['g2']}, 
{name: 'c', freq: 25, banned: ['g3']}, {name: 'd', freq: 25, banned: ['g4']}];

let freqCount = {'a':0, 'b':0, 'c':0, 'd':0};
for (i=0; i < 1000; i++) {
  let temp = randomWord(testData);
  freqCount[temp] += 1;
}
console.log(freqCount);