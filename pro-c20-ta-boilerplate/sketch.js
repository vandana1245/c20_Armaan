const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine,world;
var ball;
var ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options={
    restitution : 0.95,
    frictionAir : 0.01
  }

  ball = Bodies.circle(100,10,20,ball_options)
  World.add(world,ball);

  //java script object notation (json)
  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_options)
  World.add(world,ground);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipseMode(CENTER)
  ellipse(ball.position.x, ball.position.y, 20);

  rectMode(CENTER)
  fill("brown");
  rect(ground.position.x, ground.position.y, 400, 20)
 
}

