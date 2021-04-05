// Conditional Statements: If-Else
function getGrade(score) {
    // return 'FEDCBA'[parseInt((score > 0 ? score - 1 : 0) / 5)];
    return 'FEDCBA'[Math.ceil(score/5.0)];
}

console.log(getGrade(20))

// Conditional Statements: Switch
function getLetter(s) {
    let letter
    switch (true) {
        case 'aeiou'.includes(s[0]):
            letter = 'A';
        break;
        case 'bcdfg'.includes(s[0]):
            letter = 'B';
        break;
        case 'hjklm'.includes(s[0]):
            letter = 'C';
        break;
        case 'npqrstvwxyz'.includes(s[0]):
            letter = 'D';
        break;
    }
    return letter;
}

console.log(getLetter('gato'))

// Loops
function vowelsAndConsonants(s) {
    let word = s.split('');
    let length = word.length;
    let consonants = '';

    for(let i = 0; i < length; i++) {
        if ('aeiou'.includes(word[i])) {
            console.log(word[i]);
        } else {
            consonants += word[i] + '\n';
        }
    }
    console.log(consonants.trim())
}

console.log(vowelsAndConsonants('javascriptloops'))
