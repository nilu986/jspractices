const progress_bar_el = document.getElementsByClassName('progress-bar')[0];
var i = 0;
(() => {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 100);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progress_bar_el.style.width = width + '%';
      }
    }
  }
})();
