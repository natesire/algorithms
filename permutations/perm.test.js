const Permutations = require('./permutations');

test('swap', () => {
	let arr = [0,1]
	let p = Permutations(arr)
  expect(p.swap(0, 1)).toBe([1, 0]);
});
