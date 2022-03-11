// @ts-nocheck

document.querySelectorAll('.txt').forEach(e => {
  var chars = e.textContent.split("");
  e.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
});


jQuery(document).ready(function ($) {
  var bArray = [];
  var sArray = [4, 6, 8, 10];

  for (var i = 0; i < document.querySelector('.bubbles').width(); i++) {
    bArray.push(i);
  }

  function randomValue(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  setInterval(function () {
    var size = randomValue(sArray);
    document.querySelector('.bubbles').insertAdjacentHTML("beforeend",'<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    document.querySelector('.individual-bubble').animate({
      'bottom': '100%',
      'opacity': '-=0.7'
    // @ts-ignore
    }, 3000, function () {
      document.querySelector(this).remove();
    });
  }, 350);
});

document.addEventListener('DOMContentLoaded', function () {
  var slider1 = new SimpleAdaptiveSlider('.slider1', {
    autoplay: true,
    interval: 2500,
    swipe: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {
var slider2 = new SimpleAdaptiveSlider('.slider2', {
  autoplay: true,
  interval: 2500,
  swipe: true,
});
});