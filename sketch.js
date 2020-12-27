var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(400,800);
  createSprite(200, 400, 50, 50);
}

function draw() {
  background(0,0,0);  
  for(var k = 0; k <=width; k = k + 80){
    Divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko (j,75));
}
for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new Plink0(j,175));
}
for(var j = 40; j <=width; j=j+50)
{
  plinkos.push(new Plinko (j,275));
}
for (var j = 15; j <=width-10; j=j+50)
{
  plinkos.push(new Plink0(j,375));
}
for( var j = 0; j < divisions.length; k++) {
  divisions[k].display();
}



  drawSprites();
}