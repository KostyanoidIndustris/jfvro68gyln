document.querySelectorAll('.txt').forEach(e => {
  var chars = e.textContent.split("");
  e.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
});
document.addEventListener('DOMContentLoaded', function () {
  var slider1 = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 3000,
    swipe: true,
  });
});

document.addEventListener('DOMContentLoaded', function () {
var slider2 = new SimpleAdaptiveSlider('.slider1', {
  autoplay: true,
  interval: 3000,
  swipe: true,
});
});


jQuery(document).ready(function($){
  var bArray = [];
  var sArray = [4,6,8,10];
  for (var i = 0; i < $('.bubbles').width(); i++) {
      bArray.push(i);
  }
  function randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  setInterval(function(){
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity' : '-=0.7'
      }, 3500, function(){
          $(this).remove();
      }
      );


  }, 200);

});


jQuery(document).ready(function($){
  var bArray = [];
  var sArray = [4,6,8,10];
  for (var i = 0; i < $('.bubbles1').width(); i++) {
      bArray.push(i);
  }
  function randomValue(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
  }
  setInterval(function(){
      var size = randomValue(sArray);
      $('.bubbles1').append('<div class="individual-bubble1" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble1').animate({
          'bottom': '100%',
          'opacity' : '-=0.7'
      }, 3500, function(){
          $(this).remove();
      }
      );


  }, 200);

});