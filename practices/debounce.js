function debounce(fn, time) {
  var timeout;
  return function (immediate) {
    var context = this,
      args = Array.prototype.slice.call(arguments, 1);
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      fn.apply(context, args);
    } else {
      timeout = setTimeout(() => fn.apply(context, args), time);
    }
  };
}

console.log('Start');
var consoleLog = debounce(console.log, 5000);
for (var i = 0; i <= 111; i++) {
  var immediate = i % 20 === 0;
  consoleLog(immediate, 'Debounced Event: ' + i);
}
console.log('Done');
