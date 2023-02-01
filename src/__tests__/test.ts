import { expect, it } from "@jest/globals";
import { distance, Vector2 } from "../../src/util";

it("distance function", () => {
  expect(distance(0, 0, 0, 10)).toBe(10);
});

it("Vector2 tests", () => {
  let v1 = new Vector2(10, 5);
  let v2 = new Vector2(5, 5);
  expect(v1.getX()).toBe(10);
  expect(v1.getY()).toBe(5);
  expect(v1.getLength().toFixed(2)).toBe("11.18");
  let v3 = v1.add(v2);
  expect(v3.getX()).toBe(15);
  expect(v3.getY()).toBe(10);

  v3 = v1.multiply(2);
  expect(v3.getX()).toBe(20);
  expect(v3.getY()).toBe(10);

  v3 = v1.substract(v2);
  expect(v3.getX()).toBe(5);
  expect(v3.getY()).toBe(0);

  v3 = v1.divide(5);
  expect(v3.getX()).toBe(2);
  expect(v3.getY()).toBe(1);
});
