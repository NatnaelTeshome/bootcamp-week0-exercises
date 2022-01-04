// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {
  let strnew = '';
  length = str.length;
  for (let i = 0; i < length; i++)
  {
    strnew += str[length - i - 1];
  }
  return strnew;
}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {
  let fact = 1;
  for (let i = 2; i <= num; i++)
  {
    fact *= i;
  }
  return fact;
}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {
  if (arr1.length !== arr2.length)
  {
    return -1;
  }
  let newArray = []
  for (let i = 0; i < arr1.length; i++){
    newArray.push([arr1[i], arr2[i]]);
  }
  return newArray;
}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++){
      arr1.push(arr[i][0]);
      arr2.push(arr[i][1]);
  }
  return [arr1, arr2];
}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftRight("Hello", 3) === "lloHe"
const shiftRight = (str, num) => {
  let strnew = '';
  strlen = str.length;
  if (num > strlen){
    num = num % strlen;
  }
  strnew += str.substring(strlen - num, strlen);
  strnew += str.substring(0, strlen - num);
  return strnew;
}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {
  let today = new Date();
  let year = today.getFullYear();
  let monthIndex = today.getMonth();
  let date = today.getDate();
  let hour = today.getHours().toString();
  let minute = today.getMinutes().toString();
  let tag = '';
  monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (hour < 12){
    tag = 'morning';
  }
  else if(hour >= 12 && hour < 18){
    tag = 'afternoon';
  }
  else{
    tag = 'evening';
  }
  if (hour.length === 1){
    hour = '0' + hour;
  }
  if (minute.length === 1){
    minute = '0' + minute;
  }
  return `Today's date is ${monthArray[monthIndex]} ${date}th, ${year}. It is ${hour}:${minute} in the ${tag}.`;
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
