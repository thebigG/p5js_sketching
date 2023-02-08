export function distance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  let a = x2 - x1;
  let b = y2 - y1;

  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

/**
 * Simple Vector class for 2D space.
 */
export class Vector2 {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }
  public setX(value: number) {
    this.x = value;
  }

  public getY(): number {
    return this.y;
  }
  public setY(value: number) {
    this.y = value;
  }

  public setAngle(angle: number) {
    let length = this.getLength();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  public getAngle(): number {
    return Math.atan2(this.y, this.x);
  }

  public getLength(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  public setLength(length: number) {
    let angle = this.getAngle();
    this.x = Math.cos(angle) * length;
    this.y = Math.sin(angle) * length;
  }

  public add(v2: Vector2): Vector2 {
    return new Vector2(this.getX() + v2.getX(), this.getY() + v2.getY());
  }

  public substract(v2: Vector2): Vector2 {
    return new Vector2(this.getX() - v2.getX(), this.getY() - v2.getY());
  }
  public multiply(scalar: number): Vector2 {
    return new Vector2(this.getX() * scalar, this.getY() * scalar);
  }

  public divide(scalar: number): Vector2 {
    return new Vector2(this.getX() / scalar, this.getY() / scalar);
  }

  public addTo(v2: Vector2) {
    this.x += v2.getX();
    this.y += v2.getY();
  }

  public substractFrom(v2: Vector2) {
    this.x -= v2.getX();
    this.y -= v2.getY();
  }

  public multiplyBy(value: number) {
    this.x *= value;
    this.y *= value;
  }

  public divideBy(value: number) {
    this.x /= value;
    this.y /= value;
  }
}

export class Particle2 {
  position: Vector2;
  velocity: Vector2;
  gravity: Vector2;

  constructor(
    position: Vector2,
    speed: number,
    direction: number,
    grav: number = 0
  ) {
    this.position = new Vector2(position.getX(), position.getY());
    this.velocity = new Vector2(0, 0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
    this.gravity = new Vector2(0, grav);
  }

  accelerate(accel: Vector2) {
    this.velocity.addTo(accel);
  }

  update() {
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  }
}
