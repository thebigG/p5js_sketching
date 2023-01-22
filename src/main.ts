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

  return sketch;
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

  return sketch;
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

  return sketch;
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

  return sketch;
}

function arcs() {
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
      p5.fill("green");
      p5.arc(50, 50, 80, 80, 0, p5.PI / 2);
      p5.arc(100, 100, 80, 80, 0, p5.PI / 2);
      // p5.ellipse(50, 50, 80, 80);
    };
  };

  return sketch;
}

function arrow() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(480, 120);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      p5.beginShape();
      p5.vertex(180, 82);
      p5.vertex(207, 36);
      p5.vertex(214, 63);
      p5.vertex(407, 11);
      p5.vertex(412, 30);
      p5.vertex(219, 82);
      p5.vertex(226, 109);

      // p5.vertex();
      p5.endShape();
      // p5.ellipse(50, 50, 80, 80);
    };
  };

  return sketch;
}

function dinosaurs() {
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(480, 120);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      p5.beginShape();
      p5.noFill();
      p5.fill("white");
      p5.vertex(50, 120);
      p5.vertex(100, 90);
      p5.vertex(110, 60);
      p5.vertex(80, 20);
      p5.vertex(210, 60);
      p5.vertex(160, 80);
      p5.vertex(200, 90);
      p5.vertex(140, 100);
      p5.vertex(130, 120);
      // p5.vertex();
      p5.endShape(p5.CLOSE);
      p5.fill(0);
      p5.ellipse(155, 60, 8, 8);
    };
  };

  return sketch;
}

function main(): void {
  // new p5(circle());
  // new p5(circleAndMouse());
  // new p5(line());
  // new p5(triangle());
  // new p5(arcs());
  // new p5(arrow());
  new p5(dinosaurs());
}

main();
