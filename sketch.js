  var starImg;

  var fairyImg

  var bgImg;

  var fairy;

  var fairyVoice;

  var star;

  var starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  starImg = loadImage("star.png");
  
  fairyImg = loadAnimation("fairy.png,fairy1.png,fairy2.png");
  
  bgImg = loadImage("starnight.png");
  
  fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
  
	createCanvas(1535, 718);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(900,100);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  // fairy.debug=true;
  fairy.setCollider("circle",180,40,350);

  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here

	if(keyIsDown(LEFT_ARROW)){
		fairy.velocityX=-4;
	   }
	 
	   if(keyIsDown(RIGHT_ARROW)){
		fairy.velocityX=4;
	   }
	 
	   if(keyIsDown(DOWN_ARROW)){
		 star.velocityY=6;
		}

	  
		if(star.isTouching(fairy)){
	   star.velocityY=0;
	   star.x = fairy.x+130;
	   star.y = fairy.y-10;
		}
	 
}