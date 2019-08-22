
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var randomChosenColor = buttonColors[newsequence()];
gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// var ton = new Audio('sound/'+randomChosenColor+'.mp3');
// ton.play();

$( ".btn" ).click(function(e) {
  var userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  console.log(userClickedPattern);
});


function playSound(key) {
  console.log(key);
  var ton = new Audio('sounds/'+key+'.mp3');
  ton.play();
}


function newsequence () {
  var randomNumber = Math.round((Math.random() * 3));
  playSound(buttonColors[randomNumber]);
  return randomNumber;
}



