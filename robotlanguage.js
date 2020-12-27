//these need to be objects, not arrays

const nouns = [
    {name: 'n1', freq: 10}
    {name: 'n2', freq: 10}
    {name: 'n3', freq: 10}
]

const determiners = [
    {name: 'the', freq: 10, banned: []},
    {name: 'a', freq: 10, banned: []},
    {name: 'some', freq: 2, banned: []},
    {name: 'every', freq: 2, banned: []},
    {name: 'all', freq: 1, banned: []},
    {name: 'several', freq: 1, banned: []},
    {name: 'most', freq: 1, banned: []},
    {name: 'few', freq: 2, banned: []}
]

function increaseCount(obj, word, count) {
    obj[word] += count;
}

function randomWord(arr, banCheck) {
    divisor = 0;
    let upper = 0;
    let lower = 0;
    randNum = Math.random();
    for (let i in arr) {
        divisor += i.freq;
    }
    for (let j in arr) {
        let quotient = arr[j] / divisor;
        lower = upper;
        upper += quotient;
        if (lower <= randNum && upper > randNum) {
            //check if the chosen word is on the banned list with another word
            //if so, call the function again;
            //note: currently this can cause an infinite loop if too many words are banned
            if(banCheck.includes(arr[j])) {
                randomWord(arr, banCheck);
            }
        }
        return '';


    }
}

function randomSentence() {
    let noun1 = randomWord(nouns);
    let det1 = '';
    let verb = '';
    let noun2 = '';
    let adj1 = '';
    let adj2 = '';
    let adv = '';
    let det2 = '';
    if (Math.random > 0.5) {
        det1 = randomWord(determiners, noun);
    }
    if (det1) {
        det1 = det1[0].toUpper() + det1.slice(1);
    }else {
        noun1 = noun1[0].toUpper() + noun1.slice(1);
    }
    if (Math.random() > 0.75) {
        adj1 = randomWord(adjectives, noun1);
    }
    if (Math.random > 0.5) {
        verb = randomWord(transitiveVerbs);
        noun2 = randomWord(nouns);
        if (Math.random() > 0.75) {
            adj2 = randomWord(adjectives, noun2);
        }
        if (Math.random() > 0.5) {
            det2 = ranomWord(determiners, noun2);
        }
    } else {
        verb = randomWord(intransitiveVerbs);
    }
    if (Math.random() > 0.65) {
        adv = randomWord(adverbs, verb);
    }

    return det1 + adj1 + noun1 + verb + adv + det2 + adj2 + noun2;
}

//add checks for banned pairs

//the choice buttons will all have the same event listener: to display a form, and store an id for a function
//the function is then called on the item entered into the form.


/*
functions include:
add word of a given type
increase frequency of a word
ban a pair of words



*/