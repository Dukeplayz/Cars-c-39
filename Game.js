class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    Car1=createSprite(100,200)
    Car1.addImage(Car1pic)
    Car2=createSprite(300,200)
    Car2.addImage(Car2pic)
    Car3=createSprite(500,200)
    Car3.addImage(Car3pic)
    Car4=createSprite(700,200)
    Car4.addImage(Car4pic)
    Cars = [Car1,Car2,Car3,Car4]
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(GroundImg)
      image(Track,0,-displayHeight *4,displayWidth,displayHeight*5)
        
     var index=0
     var x=170
     var y
           for(var plr in allPlayers){
       index = index+1
       x= x+200
       y= displayHeight -allPlayers[plr].distance 
       Cars[index-1].x =x
       Cars[index-1].y =y 
       if(index === player.index ){
Cars[index-1].shapeColor= "red"
camera.position.x =displayWidth/2
camera.position.y =Cars[index-1].y
       }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>3690){
gameState =2
    }
    drawSprites()
  }
  gameOver(){
    console.log("the games over baka")
  }
}

