
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var startGame = 0;
var level = 0;

var randomChosenColor = buttonColors[newSequence()];
gamePattern.push(randomChosenColor);

$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

// var ton = new Audio('sound/'+randomChosenColor+'.mp3');
// ton.play();

$( ".btn" ).click(function(e) {
  var userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  // console.log(e.target.classList[1]);
  animatePress(e.target.classList[1]);

});

$("body").keypress(function() {
  (startGame === 0) ? newSequence():0;  //0 - nic nie robi
  (level === 0) ? $("h1").html("Level "+level):0;
  // console.log( startGame);
  startGame++;
});


function playSound(key) {
  console.log(key);
  var ton = new Audio('sounds/'+key+'.mp3');
  ton.play();
}


function newSequence () {
  var randomNumber = Math.round((Math.random() * 3));
  playSound(buttonColors[randomNumber]);
  level++;
  $("h1").html("Level "+level);
  return randomNumber;
}

function animatePress(currentColor) {
  $( "."+currentColor ).addClass( currentColor +" pressed" )
  setTimeout(function(){
    $( "."+currentColor).removeClass("pressed");
  }, 100);
}


