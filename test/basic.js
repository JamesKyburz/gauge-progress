// phantomjs it's 2015 and still no bind :(
var fp = Function.prototype
if (!fp.bind) fp.bind = require('function-bind')
var test = require('tape')
var gauge = require('../')
var g, rendered
test('create gauge', function (t) {
  t.ok(!document.querySelector('.gauge-widget'))
  g = gauge()
  var update = g.loop.update.bind(g.loop)

  g.loop.update = function (state) {
    update(state)
    setTimeout(rendered, 2200)
  }

  t.end()
})

test('start gauge', function (t) {
  g.start()
  rendered = function () {
    t.ok(document.querySelector('.gauge-widget'))
  }
  t.end()
})

test('10%', function (t) {
  t.plan(1)
  rendered = function () {
    t.equal(document.querySelectorAll('text')[1].textContent, '10%')
  }
  g.progress(10, 100)
})

test('20%', function (t) {
  t.plan(1)
  rendered = function () {
    t.equal(document.querySelectorAll('text')[1].textContent, '20%')
  }
  g.progress(20, 100)
})

test('stop', function (t) {
  g.stop()
  t.ok(!document.querySelector('.gauge-widget'))
  t.end()
})
