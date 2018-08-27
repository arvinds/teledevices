function hoverLabelParent(element) {
  var backgroundDiv = element.previousElementSibling;
  backgroundDiv.classList.add("fullOpacity");
}

function unHoverElement(element) {
  element.classList.remove("fullOpacity");
}


EXPECTED_SPACE_AFTER = 14;

var hero_dynamic_words = [
  [["obsolesence"], ["management"]],
  [["power supply"], ["design"]],
  [["modeling and"], ["simulaion"]],
  [["sensor design"], [""]],
  [["digital and RF"], ["communication"]],
  [["reliability"], ["prediction"]],
  [["rapid circuit"], ["prototyping"]],
  [["risk analysis"], ["and testing"]],
]

var wordDivId = 0;
var wordDiv1 = document.getElementById('dynamic-word1');
var wordDiv2 = document.getElementById('dynamic-word2');

var updateHeroWord = function() {
  wordDiv1.textContent = hero_dynamic_words[wordDivId][0];
  wordDiv2.textContent = hero_dynamic_words[wordDivId][1];

  wordDivId = wordDivId + 1;
  if (wordDivId == hero_dynamic_words.length) { wordDivId = 0; }
}

function fadeIn(duration, callback) {
  // console.log("Fading in ", hero_dynamic_words[wordDivId][0] ," at: ", new Date().getTime()/1000.0)
  anime({
    targets: '#hero-dynamic-word-container',
    opacity: 1,
    easing: 'linear',
    duration: duration,
    complete: callback,
  });
}

function fadeOut(duration, callback) {
  // console.log("Fading out ", hero_dynamic_words[wordDivId][0] ," at: ", new Date().getTime()/1000.0)
  anime({
    targets: '#hero-dynamic-word-container',
    opacity: 0,
    easing: 'linear',
    duration: duration,
    complete: callback,
  });
}

function animateWordFade() {
  var fadeOutCallback = function() {
    fadeOut(1000, animateWordFade);
  }
  var fadeInCallback = function() {
    setTimeout(fadeOutCallback, 4000);
  }
  // console.log("Fading out: ", hero_dynamic_words[wordDivId][0]);
  updateHeroWord();
  fadeIn(1500, fadeInCallback);
}

function flyPlane() {
  var video = document.getElementById('hero-video');
  video.play();
  setTimeout(flyPlane, Math.round(Math.random()*5+10)*1000);
}

function animateShimmer() {
  if (wordDivId != 0) {
    var currentElement = document.getElementById('hero-word-container' + wordDivId);
    currentElement.classList.remove('shimmer');
  }
  wordDivId = Math.round(Math.random()*7+1) // [1,8]
  var newElement = document.getElementById('hero-word-container' + wordDivId);
  newElement.classList.add('shimmer');
  setTimeout(animateShimmer, 2400)
}
document.addEventListener("DOMContentLoaded", function() {
  // animateWordFade();
  // animateShimmer();
  // setTimeout(flyPlane, 500);
  var video = document.getElementById('hero-video');
  video.loop = true;
  video.play();
});
