module.exports = {
  randomWord(arr, banCheck=[]) {
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
}