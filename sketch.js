const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
var canvas, mconstraint;


function setup() {
  canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;

  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasMouse
  };

  mconstraint = MouseConstraint.create(engine, options);
  World.add(world, mconstraint);

  bob1 = new Pendulum(200, 400, "black");
  bob2 = new Pendulum(260, 400, "black");
  bob3 = new Pendulum(320, 400, "black");
  bob4 = new Pendulum(390, 400, "black");
  bob5 = new Pendulum(450, 400, "black");

  sling1 = new Sling(bob1.body, { x: 200, y: 200 });
  sling2 = new Sling(bob2.body, { x: 260, y: 200 });
  sling3 = new Sling(bob3.body, { x: 320, y: 200 });
  sling4 = new Sling(bob4.body, { x: 390, y: 200 });
  sling5 = new Sling(bob5.body, { x: 450, y: 200 });

  Engine.run(engine);
}

function draw() {
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}