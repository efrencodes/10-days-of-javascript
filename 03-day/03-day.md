# Try, Catch, and Finally

```javascript
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    let parseString = s.toString()
    let reverse = parseString.split('').reverse().join('')
    console.log(reverse)
  } catch (error) {
    console.error(error)
    console.log(s)
  }
}
```

# Throw
