# gauge-progress

svg gauge progress

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

# license

MIT
