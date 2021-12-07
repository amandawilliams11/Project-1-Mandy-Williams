var x,y;
let pup; 
s=0;
var pup2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,182,193);

//create objects 
 pup = new Puppy();
 pup2 = new Puppy(199,335);
}

function draw() {
 
 if (millis()<2000){
 	puppers();
 }

 if (millis()>3000 && millis()<4000){
 	puppers2();
 }

 if (millis()>4000 && millis()<6000){
 	background(203,195,227); //resets the background
 	pup2.show();
 }

 if (millis()>6000 && millis()<9000){
 	blush();
 	updatedBackground();
 }

 if(millis()>9000 && millis()<20000){
 	blink();
 }

}

//puppy class
class Puppy{
	constructor(x, y, s){
	}

show(){ //the puppy
  noStroke();
  fill(102,65,46);//ears
  ellipse(280,315,105,155);//right
  ellipse(115,315,105,155);//left
  
  fill(200,158,106);//face
  ellipse (199,335,200,200);

  fill (255);//eyes
  ellipse(235,310,70,80);
  ellipse(160,310,70,80);

  fill(0);//inner eyes
  ellipse(235,318,70,65);
  ellipse(160,318,70,65);

  fill(101,67,33);//nose
  ellipse(198,365,50,35);

	}

}



function puppers(){ //the first 3 puppy clones

	// for(z=0; z<100; z++){
	// 	if(s<1000){
	// 		background(255,182,193);
	// 		s = s + 0.01
	// 	}
	// }

	push();
	scale(0.5);
	pup.show();
	scale(0.5);
	pup.show();
	scale(0.5);
	pup.show();
	pop();

	s=0;

	//pup.show(0,-100, s);
}

function puppers2(){//the last three puppy clones
	
	for(z=0; z<100; z++){
		if(s<1000){
			background(255,182,193);
			s = s + 0.01
		}
	}


	push();
	scale(1.75);
	pup.show();
	pop();

    pup.show();
}

function updatedBackground(){ //creates white border for puppy
	fill(255);
	rect(30,20,755,155);
	rect(30,500,755,155);

	fill(204,101,192,127); //decorative flower
	translate(580,100);
	noStroke();
	for(let i=0; i<10; i++){
		ellipse(20,30,50,100);
		rotate(PI/5);
	}
}


function blush(){ //adds blush
	fill(222, 93, 83);
	ellipse(155,375,30,30);
    ellipse(241,375,30,30);
	
}

function blink(){
	if(mouseIsPressed == true){

		stroke(0)
		ellipse(235,310,70,80);
        ellipse(160,310,70,80);

		fill(200,158,106);
		ellipse(235,318,70,65);
        ellipse(160,318,70,65);
	} else {
		fill(255);
		ellipse(235,310,70,80);
        ellipse(160,310,70,80);

        fill(0);
		ellipse(235,318,70,65);
        ellipse(160,318,70,65);
	}
}

