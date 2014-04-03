var test = require('tape');
var gauge = require('../');
test('run gauge', function(t) {
  t.ok(!document.querySelector('.gauge-widget'));

  var g = gauge();
  g.start();

  t.ok(document.querySelector('.gauge-widget'));
  var progress = document.querySelector('.percentage');

  g.progress(10, 100);

  t.equal(progress.textContent, '10%');

  g.stop();
  t.ok(!document.querySelector('.gauge-widget'));
  t.end();
});
