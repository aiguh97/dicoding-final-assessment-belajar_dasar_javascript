import { sum } from "./index.js";
import { test } from "node:test";
import assert from "node:assert";

test("should return 3 when adding 1 and 2", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("should return -2 when adding -1 and -1", () => {
  assert.strictEqual(sum(-1, -1), -2);
});

test("should return 0 when adding 0 and 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});