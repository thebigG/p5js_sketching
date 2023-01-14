import p5 from 'p5';


function circle(){
    var sketch = (p5: p5) =>{
		// The sketch setup method 
p5.setup = () => {
	// Creating and positioning the canvas
	const canvas = p5.createCanvas(200, 200);
};

// The sketch draw method
p5.draw = () => {
	// DEMO: Let the circle instances draw themselves
	p5.background(204);
	p5.ellipse(50,50,80,80);
};
};

new p5(sketch);
}


function circleAndMouse(){
    var sketch = (p5: p5) =>{
		// The sketch setup method 
p5.setup = () => {
	// Creating and positioning the canvas
	const canvas = p5.createCanvas(200, 200);
};

// The sketch draw method
p5.draw = () => {
	// DEMO: Let the circle instances draw themselves
	p5.background(204);
	p5.ellipse(p5.mouseX,p5.mouseY,80,80);
};
};

new p5(sketch);
}


function main(): void{
	circle();
	circleAndMouse();
}

main();