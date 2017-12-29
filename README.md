# node-merge-sort

> Merge sort implementation

Features
* O(n log n) performance
* Stable sort
* Generalized -- pass in your own comparison function

## Usage

```js
var sort = require('@jayrbolton/merge-sort')

var sorted = sort([5, 2, 4, 7, 1, 3, 2, 6])
```

outputs

```
[1, 2, 3, 4, 5, 6, 7]
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install @jayrbolton/merge-sort
```

## Benchmarks

A simple benchmark in [/benchmark](/benchmark) shows merge sort to be marginally faster than the built-in sort function.

## License

MIT

