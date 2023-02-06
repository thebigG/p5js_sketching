import p5, { Vector } from "p5";
import { Particle2, Vector2 } from "./util";

function circle() {
  let canvas_id = "circle";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      let canvas = p5.createCanvas(200, 200);
      canvas.id(canvas_id);
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
  let canvas_id = "circleAndMouse";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
      canvas.id(canvas_id);
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
  let canvas_id = "line";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
      canvas.id(canvas_id);
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
  let canvas_id = "triangle";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(100, 100);
      canvas.id(canvas_id);
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
  let canvas_id = "arcs";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(200, 200);
      canvas.id(canvas_id);
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
  let canvas_id = "arrow";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(480, 120);
      canvas.id(canvas_id);
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
  let canvas_id = "dinosaurs";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(480, 120);
      canvas.id(canvas_id);
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

function robotAndMouse() {
  let canvas_id = "robotAndMouse";
  var sketch = (p5: p5) => {
    // The sketch setup method
    // let outer_ciircle_X =
    let inner_circle_x = 288;
    let inner_circle_y = 150;
    let inner_circle_offset_y = 0;
    let inner_circle_offset_x = 0;

    let outer_circle_radius = 14;
    let inner_circle_radius = 3;

    let radius = outer_circle_radius - inner_circle_radius;

    let theta = 0;

    let opposite = 0;
    let adjacent = 0;

    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(720, 480);
      canvas.id(canvas_id);
      p5.strokeWeight(2);
      p5.angleMode(p5.RADIANS);
      p5.ellipseMode(p5.RADIUS);
    };

    // The sketch draw method
    p5.draw = () => {
      inner_circle_x = 288;
      inner_circle_y = 150;

      // TODO:Make thos eye-follow logic re-usable
      opposite = p5.mouseY - inner_circle_y;
      adjacent = p5.mouseX - inner_circle_x;

      theta = Math.atan2(opposite, adjacent);

      inner_circle_offset_x = radius * p5.cos(theta);
      inner_circle_offset_y = radius * p5.sin(theta);

      inner_circle_x += inner_circle_offset_x;
      inner_circle_y += inner_circle_offset_y;

      // console.log("mouseX:" + p5.mouseX);
      // DEMO: Let the circle instances draw themselves
      p5.background(204);

      // Neck
      p5.stroke(102);
      p5.line(266, 257, 266, 162); // Left
      p5.line(276, 257, 276, 162); // Middle
      p5.line(286, 257, 286, 162); // Right

      // Antennae
      p5.line(276, 155, 246, 112); // Small
      p5.line(276, 155, 306, 56); // Tall
      p5.line(276, 155, 342, 170); // Tall

      // Body
      p5.noStroke();
      p5.fill(102);
      p5.ellipse(264, 377, 33, 33); // Antigravity Orb
      p5.fill(0);
      p5.rect(219, 257, 90, 120);
      p5.fill(102);
      p5.rect(219, 274, 90, 6);

      // Head
      p5.fill(0);
      p5.ellipse(276, 155, 45, 45);
      p5.fill(255);
      p5.ellipse(288, 150, outer_circle_radius, outer_circle_radius); // outer circle
      p5.fill(0);
      p5.ellipse(
        inner_circle_x,
        inner_circle_y,
        inner_circle_radius,
        inner_circle_radius
      ); // circle
      p5.fill(153);
      p5.ellipse(263, 148, 5, 5);
      p5.ellipse(296, 130, 4, 4);
      p5.ellipse(305, 162, 3, 3);
    };
  };

  return sketch;
}

function robot() {
  let canvas_id = "robot";
  var sketch = (p5: p5) => {
    // The sketch setup method
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(720, 480);
      canvas.id(canvas_id);
      p5.strokeWeight(2);
      p5.ellipseMode(p5.RADIUS);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);

      // Neck
      p5.stroke(102);
      p5.line(266, 257, 266, 162); // Left
      p5.line(276, 257, 276, 162); // Middle
      p5.line(286, 257, 286, 162); // Right

      // Antennae
      p5.line(276, 155, 246, 112); // Small
      p5.line(276, 155, 306, 56); // Tall
      p5.line(276, 155, 342, 170); // Tall

      // Body
      p5.noStroke();
      p5.fill(102);
      p5.ellipse(264, 377, 33, 33); // Antigravity Orb
      p5.fill(0);
      p5.rect(219, 257, 90, 120);
      p5.fill(102);
      p5.rect(219, 274, 90, 6);

      // Head
      p5.fill(0);
      p5.ellipse(276, 155, 45, 45);
      p5.fill(255);
      p5.ellipse(288, 150, 14, 14);
      p5.fill(0);
      p5.ellipse(288, 150, 3, 3);
      p5.fill(153);
      p5.ellipse(263, 148, 5, 5);
      p5.ellipse(296, 130, 4, 4);
      p5.ellipse(305, 162, 3, 3);
    };
  };

  return sketch;
}

function particle() {
  let canvas_id = "particle";
  var sketch = (p5: p5) => {
    // The sketch setup method
    let width = window.innerWidth;
    let height = window.innerHeight;
    let position = new Vector2(50, height);
    let particle_obj = new Particle2(position, 10, -p5.PI / 2);

    let accel = new Vector2(0.1, 0.1);
    p5.setup = () => {
      // Creating and positioning the canvas
      const canvas = p5.createCanvas(width, height);
      canvas.id(canvas_id);
    };

    // The sketch draw method
    p5.draw = () => {
      // DEMO: Let the circle instances draw themselves
      p5.background(204);
      particle_obj.accelerate(accel);
      particle_obj.update();
      p5.ellipse(
        particle_obj.position.getX(),
        particle_obj.position.getY(),
        80,
        80
      );
    };
  };

  return sketch;
}

let drawings = new Map<string, (...args: any[]) => any>();

function selector(p: p5) {
  let sel: any;
  let lastShown: p5;
  p.setup = function () {
    p.textAlign(p.CENTER);
    p.background(200);
    sel = p.createSelect();
    sel.position(10, 10);
    for (let d of drawings) {
      sel.option(d[0]);
    }

    let firstSelected = drawings.keys().next().value;
    sel.selected(firstSelected);

    lastShown = new p5(drawings.get(firstSelected)());

    sel.changed(() => {
      let item = sel.value();
      if (lastShown != undefined) {
        lastShown.remove();
      }
      lastShown = new p5(drawings.get(item)());
    });
  };
}

function main(): void {
  drawings.set("circle", circle);
  drawings.set("circleAndMouse", circleAndMouse);
  drawings.set("triangle", triangle);
  drawings.set("arcs", arcs);
  drawings.set("line", line);
  drawings.set("arrow", arrow);
  drawings.set("robot", robot);
  drawings.set("robotAndMouse", robotAndMouse);
  drawings.set("dinosaurs", dinosaurs);
  drawings.set("particle", particle);

  new p5(selector);
}

main();
