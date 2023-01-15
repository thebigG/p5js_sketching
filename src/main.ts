import p5 from "p5";

function circle() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      p5.ellipse(50, 50, 80, 80);
    };
  };

  new p5(sketch);
}

function circleAndMouse() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    };
  };

  new p5(sketch);
}

function line() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      p5.line(10, 10, 200, 200);
    };
  };

  new p5(sketch);
}

function triangle() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(100, 100);
    };

    // The sketch draw method
    p5.draw = () => {
      p5.background(204);
      //Tranlate origin
      // p5.translate(p5.width/2, p5.height/2);
      p5.strokeWeight(2);
      p5.point(0, 0);
      // p5.rotate(p5.PI/4);
      p5.triangle(10, 10, 20, 40, 50, 25);
      // p5.rotate(p5.PI/4);
    };
  };

  new p5(sketch);
}

function main(): void {
  circle();
  circleAndMouse();
  line();
  triangle();
}

main();
