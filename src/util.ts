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

  public getAngle() {
    Math.atan2(this.y, this.x);
  }

  public getLength(): number {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }

  public add() {}
}
