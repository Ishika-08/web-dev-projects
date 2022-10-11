var n = Math.floor((Math.random() * 6));
var dice= new Array("images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png", "images/dice5.png", "images/dice6.png");
document.querySelector(".img1").setAttribute("src",dice[n]);

var m= Math.floor((Math.random() * 6));
var dice= new Array("images/dice1.png", "images/dice2.png", "images/dice3.png","images/dice4.png", "images/dice5.png", "images/dice6.png");
document.querySelector(".img2").setAttribute("src",dice[m]);

if(n>m){
  document.querySelector("h1").innerHTML = "🚩PLAYER 1 WINS";
}

else if(n<m){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS🚩";
}

else{
    document.querySelector("h1").innerHTML = "NOBODY WINS";
}
