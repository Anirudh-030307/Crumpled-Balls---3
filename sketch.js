var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ball,ground,box1,box2,box3,launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
	var canvas=createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	//ball
	ball = new Ball(250,360);
	
	//ground
	ground = new Ground(width/2, 680, 800, 30 );

	//box
	box1 = new Box(650,670,200,15);
    box2 = new Box(557,575,20,190);
	box3 = new Box(743,575,20,190);

	launcher = new Launcher(ball.body,{ x: 250, y: 360});

	Engine.run(engine);
}


function draw() {

	background("white");

	text("x"+mouseX+"y"+mouseY,mouseX,mouseY)

	Engine.update(engine);
	

	ground.display();
	ball.display();
	box1.display();
	box2.display();
	box3.display();
	launcher.display();    
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-110});
	}
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX , y:mouseY})
}

function mouseReleased() {
    launcher.fly();
}
