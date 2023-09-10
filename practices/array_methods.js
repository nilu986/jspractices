let arr = [12, 0, undefined, false, 23, 980];
//1.Remove false value from Array
//console.log(arr.filter(Boolean));
//2. Convert arr to object
//console.log({...arr})
//3. Add property to object using prototype
/* let obj = {
  x: 123,
  y: () => {
    console.log('y');
  },
};
obj.__proto__.lname = 'yadav';
console.log(obj.__proto__);
console.log(obj.lname); */
//4. Argument is number or not?
const isNum = (n) => !isNaN(parseFloat(n) && isFinite(n));
console.log(34.23 && true);
console.log(parseFloat(34.23));
console.log(!isNaN(true));
console.log(isFinite(34.23));
console.log(isNum(34.23 + 'n'));
/* function checkNum(arg1, arg2, arg3) {
  console.log(arguments);
  if (arguments && arguments.length > 0) {
    for (let arg of arguments) {
      if (isNaN(parseFloat(arg)) && !isFinite(arg)) {
        console.log(typeof arg);
        console.log('Not a Number', arg);
      }
    }
  }
} 
checkNum(12, 34, 'anil', 145, 'yadav');*/
