var svg = require('virtual-dom/virtual-hyperscript/svg')
var vdom = require('virtual-dom')
module.exports = h

function h () {
  var tag = arguments[0]
  if (/svg|circle|path|text/.test(tag)) return svg.apply(svg, arguments)
  return vdom.h.apply(vdom, arguments)
}
