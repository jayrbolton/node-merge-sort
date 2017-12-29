const Benchmark = require('benchmark')
const msort = require('..')

var suite = new Benchmark.Suite()

var input = []
for (var i = 0; i < 1000; i++) {
  input[i] = Math.round(Math.random() * 1000000)
}

suite.add('merge sort', function () {
  msort(input.slice(0))
})
.add('builtin sort', function () {
  input.slice(0).sort()
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').map('name'))
  console.log('--- BUILTIN SORT ---')
  console.log(this[1].times)
  console.log(this[1].cycles)
  console.log('--- MERGE SORT ---')
  console.log(this[0].times)
  console.log(this[0].cycles)
})
.run({async: true})
