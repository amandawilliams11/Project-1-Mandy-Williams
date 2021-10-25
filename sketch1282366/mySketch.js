//static mode 

size (800,800);
background(203, 219, 247); 

noStroke(); 

fill(255, 100); //transparent triangle
triangle(790, 9, 790, 627, 590, 550);

fill(199, 250, 132);//green circle
ellipse(450, 200, 300, 300);

fill(222, 132, 250);//purple circle
ellipse(700, 100, 250, 250);

fill(132, 250, 230);//blue circle
ellipse(600, 210, 230, 230);

fill(250, 165, 132);//peach circle
ellipse(200, 100, 400, 400);

smooth();
fill(245, 241, 122);
ellipse(130, 190, 160, 160);//yellow circle

fill(250, 199, 132);
triangle(220, 990, 967, 790, 550, 590); //orange triangle

fill(255, 100); 
triangle(9, 790, 627, 790, 550, 590); //transparent triangle

fill(250, 132, 169);//pink quad.
beginShape();
vertex(500,450);
vertex(450, 400);
vertex(400,500);
vertex(500, 600);
endShape(CLOSE);