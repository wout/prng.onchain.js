# prng.onchain.js
A micro JS implementation (112 bytes) of the Mulberry32 pseudorandom number
generator.

This library is intended for use in environments where the available storage
space is very limited; like blockchains for example. Everything is stripped down
to the bare essentials.

![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/onchainjs/prng.onchain.js)

## Usage
```js
// Initialize a random generator for a given seed value
let rand = Pr.ng(1234)
rand()
// => 0.07329497812315822
rand()
// => 0.7034119898453355
rand()
// => 0.9028560190927237

// Re-initialize to start the same sequence again using the same seed value
rand = Pr.ng(1234)
rand()
// => 0.07329497812315822
rand()
// => 0.7034119898453355
rand()
// => 0.9028560190927237
```

## Acknowledgements
This implementation is borrowed from
[here](https://github.com/bryc/code/blob/master/jshash/PRNGs.md) and
[here](https://gist.github.com/blixt/f17b47c62508be59987b).

## License
prng.onchain.js is licensed under the terms of the MIT License.
