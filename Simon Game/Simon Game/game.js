var userClickedPattern= [];
var gamePattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
var level=0;

$(document).on("keypress", nextSequence); //the game starts by pressing any key

function nextSequence(){                  //fist function called on keypress
  $("h1").text("Level " + level);
  var randomNumber= Math.floor(Math.random()*3 + 1);  //choose random color and show it
  var randomChosenColour = buttonColours[randomNumber];
  $("#" + randomChosenColour).fadeOut().fadeIn();
  playSound(randomChosenColour);
  gamePattern.push(randomChosenColour);    //push the chosen color in gamePattern
  level++;
}

$(".btn").on("click", handler);         //to check what is clicked
function handler(){
  var userChosenColour = $(this).attr("id");  //push choosen color in userClickedPattern
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);                //animate choosen key
  animatePress(userChosenColour);

  if(gamePattern.length == userClickedPattern.length){  //checkAnswer when the user has entered the answer
    checkAnswer(userClickedPattern.length - 1);
  }
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  },100)
}

function playSound(key){
  switch(key){
    case "blue":
    var audio = new Audio("sounds/blue.mp3");
    break;

    case "green":
    var audio = new Audio("sounds/green.mp3");
    break;

    case "red":
    var audio = new Audio("sounds/red.mp3");
    break;

    case "yellow":
    var audio = new Audio("sounds/yellow.mp3");
    break;

    default:
    cosole.log("default");

  }
  audio.play();
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    setTimeout(nextSequence(),1000);
    userClickedPattern=[];
  }
  else{
    var audio= new Audio("sounds/wrong.mp3");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern= [];
}
