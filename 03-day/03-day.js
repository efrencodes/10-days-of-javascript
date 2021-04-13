/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
// function getSecondLargest(nums) {
//   let largest = nums[0] // 2
//   let secondLargest = nums[0] // 2
//   let longitud = nums.length

//   for (let i = 0; i < longitud; i++) {
//     if (nums[i] > largest) { // 3 > 2
//       secondLargest = largest // 2
//       largest = nums[i]
//       continue
//     }
//     if ((nums[i] > secondLargest) && (nums[i] < largest)) {
//       secondLargest = nums[i];
//     }
//   }
//   return secondLargest
// }

// console.log(getSecondLargest([2, 3, 6, 6, 5]))

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
// function reverseString(s) {
//   try {
//     console.log(s.split('').reverse().join(''))
//   } catch (e) {
//     console.error(e.message)
//     console.log(s);
//   }
// }

// reverseString("1234")


/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  let number = Math.sign(a)
  if (number === 1) {
    return 'YES'
  } else {
    if(number === 0 || number === -0) {
      throw new Error('Zero Error');
    } else {
      throw new Error('Negative Error');
    }
  }
}

const a = [2, -1, 20];
for (let i = 0; i < a.length; i++) {
    try {
        console.log(isPositive(a[i]));
    } catch (e) {
        console.log(e.message);
    }
}