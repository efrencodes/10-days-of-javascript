# Functions

### Task

Implement a function named factorial that has one parameter: an integer, n. It must return the value of n!(i.e.,n factorial).

```javascript
const factorial = n => n == 1 ? n : n * factorial(n - 1)

factorial(4)

```