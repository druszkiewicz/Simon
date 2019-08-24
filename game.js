
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
  // animatePress(e.target.classList[1]);
  checkAnswer(userClickedPattern.length - 1);
});

$("body").keypress(function() {
  (startGame === 0) ? newSequence():0;  //0 - nic nie robi
  (level === 0) ? $("h1").html("Level "+level):0;
  // console.log( startGame);
  startGame++;
  startOver();
});


function playSound(key) {
  // console.log(key);
  var ton = new Audio('sounds/'+key+'.mp3');
  ton.play();
  animatePress(key);
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

function checkAnswer(currentLevel){
  if (userClickedPattern[currentLevel]===gamePattern[currentLevel]) {
    setTimeout(function(){
      newSequence();
      userClickedPattern = [];
    }, 1000);
  }
  else {
    var tonwrong = new Audio('sounds/wrong.mp3');
    tonwrong.play();

    $( "body" ).addClass("game_over" )
    setTimeout(function(){
      $( "body").removeClass("game_over");
    }, 200);
    $("h1").html("Game Over, Press Any Key to Restart");
  }
}

function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  startGame = 0;
  evel = 0;
}


