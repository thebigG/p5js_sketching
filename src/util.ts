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
