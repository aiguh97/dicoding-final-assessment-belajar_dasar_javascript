import test from 'node:test';
import assert from 'node:assert/strict';
import sum from './index.js';

test('Correctly sums two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(100, 200), 300);
});

test('Returns 0 if one of the arguments is not a number', () => {
  assert.strictEqual(sum('2', 3), 0);
  assert.strictEqual(sum(2, '3'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(undefined, 1), 0);
  assert.strictEqual(sum({}, []), 0);
});

test('Returns 0 if one of the arguments is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(3, -2), 0);
  assert.strictEqual(sum(-5, -5), 0);
});

test('Returns 0 if both arguments are invalid', () => {
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, undefined), 0);
});

test('Correctly sums decimal numbers', () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
  assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < Number.EPSILON); // floating point precision
});
