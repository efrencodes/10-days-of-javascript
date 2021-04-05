# Conditional Statements: If-Else

```javascript
function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = 'A'
    } else if (score > 20 && score <= 25) {
        grade = 'B'
    } else if (score > 15 && score <= 20) {
        grade = 'C'
    } else if (score > 10 && score <= 15) {
        grade = 'D'
    } else if (score > 5 && score <= 10) {
        grade = 'E'
    } else if (score > 0 && score <= 5) {
        grade = 'F'
    }
    return grade;
}
```

# Conditional Statements: Switch

```javascript
function getLetter(s) {
    let letter;
    // Write your code here
    let first_letter = s.charAt(0)
    switch(first_letter){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            letter = 'A'
        break;
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
            letter = 'B'
        break;
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
            letter = 'C'
        break;
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
            letter = 'D'
        break;
    }
    return letter;
}
```

# Loops

```javascript
function vowelsAndConsonants(s) {
    let word = s.split('');
    let length = word.length;
    let otherword = '';

    for(let i = 0; i < length; i++) {
        if ('aeiou'.includes(word[i])) {
            console.log(word[i]);
        } else {
            otherword += word[i];
        }
    }
    let otherLength = otherword.length
    for (let index = 0; index < otherLength; index++) {
        console.log(otherword[index]);
    }
}
```