var test = require('tape')
var sort = require('..')

test('simple example', t => {
  var inp = [5, 2, 4, 7, 1, 3, 2, 6]
  var sorted = sort(inp)
  t.deepEqual(sorted, [1, 2, 2, 3, 4, 5, 6, 7])
  t.end()
})

test('odd count', t => {
  var inp = [5, 2, 4, 7, 1, 3, 2, 6, 0]
  var sorted = sort(inp)
  t.deepEqual(sorted, [0, 1, 2, 2, 3, 4, 5, 6, 7])
  t.end()
})

test('negatives', t => {
  var inp = [-1, 1, 0, 1, -10]
  var sorted = sort(inp)
  t.deepEqual(sorted, [-10, -1, 0, 1, 1])
  t.end()
})

test('empty', t => {
  t.deepEqual(sort([]), [])
  t.end()
})

test('stability with custom compare', t => {
  var arr = [{tag: 'b', n: 1}, {tag: 'c', n: 0}, {tag: 'a', n: 1}]
  function compare (obj1, obj2) {
    if (obj1.n < obj2.n) return -1
    if (obj1.n > obj2.n) return 1
    if (obj1.n === obj2.n) return 0
  }
  sort(arr, compare)
  t.deepEqual(arr, [{tag: 'c', n: 0}, {tag: 'b', n: 1}, {tag: 'a', n: 1}])
  t.end()
})
