// ES 2015
var curry = function (fn) {
  var prevArgs = Array.prototype.slice.call(arguments, 1);
  return fn.length <= prevArgs.length
    ? fn(...prevArgs)
    : function () {
        var nextArgs = Array.prototype.slice.call(arguments);
        return curry(fn, ...prevArgs, ...nextArgs);
      };
};

// ES6
var curry1 = (fn, ...args) =>
  fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more);

function volume(l, w, h) {
  return l * w * h;
}

var curring = curry(volume);
console.log(curring(1)(2)(3));
console.log(curring(1, 2, 3));
console.log(curring(1, 3)(2));
console.log(curring(1)()(2)(3));
