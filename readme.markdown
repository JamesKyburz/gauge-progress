# gauge-progress

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/gauge-progress.svg)](https://greenkeeper.io/)

gauge progress

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

[![build status](https://api.travis-ci.org/JamesKyburz/gauge-progress.svg)](https://travis-ci.org/JamesKyburz/gauge-progress)[![npm](https://img.shields.io/npm/v/gauge-progress.svg)](https://npmjs.org/package/gauge-progress) [![downloads](https://img.shields.io/npm/dm/gauge-progress.svg)](https://npmjs.org/package/gauge-progress)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/gauge-progress.svg)](https://saucelabs.com/u/gauge-progress)

Try it out! [![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=de194560ff8a5f01c287)

main.js:

``` js
var gauge = require('gauge-progress')()
gauge.start()
gauge.progress(10, 100) //10%

```

then compile with [browserify](http://browserify.org):

```
browserify main.js > bundle.js
```

# methods

``` js
var gauge = require('gauge-progress')
```

## var g = gauge(opts={})

Create a new gauge progress instance `g` from `opts`:

check options in defaults.js

## p.show()

show gauge

## p.stop()

remove gauge

## p.progress(value, total)

progress to update gauge

# install

With [npm](https://npmjs.org) do:

```
npm install gauge-progress
```

# test

```
npm test
```

# license

MIT
