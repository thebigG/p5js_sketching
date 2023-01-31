import { expect, it } from "@jest/globals";
import { distance, Vector2 } from "../../src/util";

it("distance function", () => {
  expect(distance(0, 0, 0, 10)).toBe(10);
});

it("vector test", () => {
  let v1 = new Vector2(10, 5);
  expect(v1.getX()).toBe(10);
  expect(v1.getY()).toBe(5);
  expect(v1.getLength().toFixed(2)).toBe("11.18");
});
