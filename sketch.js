var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Car1,Car2,Car3,Car4,Cars 
var form, player, game;
var Car1pic,Car2pic,Car3pic,Car4pic
var GroundImg,Track

function preload (){
  Car1pic = loadImage("images/car1.png")
  Car2pic = loadImage("images/car2.png")
  Car3pic = loadImage("images/car3.png")
  Car4pic = loadImage("images/car4.png")
  Track = loadImage("images/track.jpg")
GroundImg = loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
game.gameOver();
  }
}
