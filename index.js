module.exports = sort

function sort (arr, compare) {
  var len = arr.length
  var last = len - 1
  if (arguments.length === 1) compare = defaultComparison
  for (var width = 1; width < len; width = 2 * width) {
    var doubleWidth = 2 * width
    for (var i = 0; i < len; i += doubleWidth) {
      var leftStart = i
      var leftEnd = min(i + width - 1, last)
      var rightEnd = min(i + doubleWidth - 1, last)
      if (leftEnd !== rightEnd) {
        merge(arr, leftStart, leftEnd, rightEnd, compare)
      }
    }
  }
  // Min, favoring first arg
  function min (x, y) { return x <= y ? x : y }
  return arr
}

function defaultComparison (x, y) {
  return x < y ? -1 : x > y ? 1 : 0
}

// arr holds two sub-arrays
// arr[p..q] and arr[q+1..r]
// and merges them in-place to the single sub-array arr[p..r]
function merge (arr, leftStart, leftEnd, rightEnd, compare) {
  // p, q, r
  // 2, 4, 7
  var leftLen = leftEnd - leftStart + 1
  var rightLen = rightEnd - leftEnd
  var left = []
  var right = []
  var i = 1
  var j = 1
  // Fill the left and right arrays
  while (i <= leftLen) {
    left[i] = arr[leftStart + i - 1]
    i += 1
  }
  while (j <= rightLen) {
    right[j] = arr[leftEnd + j]
    j += 1
  }
  i = 1
  j = 1
  for (var k = leftStart; k <= rightEnd; ++k) {
    var comparison
    if (i > leftLen) comparison = 1
    else if (j > rightLen) comparison = -1
    else comparison = compare(left[i], right[j])
    if (comparison <= 0) {
      arr[k] = left[i]
      i += 1
    } else {
      arr[k] = right[j]
      j += 1
    }
  }
}
