import { expect, it } from "@jest/globals";
import { distance } from "../../src/util";

it("distance function", () => {
  expect(distance(0, 0, 0, 10)).toBe(10);
});
