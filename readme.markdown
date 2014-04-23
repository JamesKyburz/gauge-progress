# gauge-progress

svg gauge progress

[![browser
support](https://ci.testling.com/jameskyburz/gauge-progress.png)](https://ci.testling.com/jameskyburz/gauge-progress)

[![build
status](https://api.travis-ci.org/JamesKyburz/gauge-progress.png)](https://api.travis-ci.org/JamesKyburz/gauge-progress.png)

Try it out on [requirebin](http://requirebin.com/?gist=9970787)

main.js:

``` js
var gauge = require('gauge-progress')();
gauge.start();
gauge.progress(10, 100); //10%

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
