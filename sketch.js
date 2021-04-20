var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music.mp3
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "orange";

    block3 = createSprite(500,590,180,20);
    block3.shapeColor = "yellow";

    block4 = createSprite(700,590,180,0);
    block4.shapeColor = "green";


    

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = "white"
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
     
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
       bounceOff(ball,block1)
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceoff(block2) ){
        bounceOff(ball,block2)
        ball.shapeColor = "orange";
        music.play();
        
        if(ball.x<0){
          music.stop()
           ball.velocityX = 3
        } if(ball.x>800){
            music.stop()
            ball.velocityX = -3
        }

        if(ball.y<0){
          music.stop()
          ball.velocityY = 3
        }
    }

    if(block3.isTouching(ball) && ball.bounceoff(block3) )
        bounceOff(ball,block3)
        ball.shapeColor = "yellow";
        music.play()


        if(block4.isTouching(ball) && ball.bounceoff(block4) )
            bounceOff(ball,block4)
            ball.shapeColor = "green";
            music.play()

    drawSprites();
}
