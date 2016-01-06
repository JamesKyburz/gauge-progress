var vdom = require('virtual-dom')
var hyperx = require('hyperx')
var svg = require('virtual-dom/virtual-hyperscript/svg')
var hx = hyperx(vdom.h)
var hxs = hyperx(svg)

module.exports = render

function render (state) {
  return hx`<div className="gauge-widget">
    <div class="overlay" style=${state.overlay.style} ></div>
    ${hxs`<svg style=${state.gauge.style} width="100%" height="100%">
      <circle fill="transparent" style=${state.circle.style} cx=${state.circle.cx} cy=${state.circle.cy} r=${state.circle.r}></circle>
      <path class="progress" fill="transparent" style=${state.progress.style} d=${state.progress.d}></path>
      <text class="loading" text-anchor="middle" style=${state.loading.style} x=${state.loading.x} y=${state.loading.y}>${state.loading.value}</text>
      <text class="percentage" text-anchor="middle" style=${state.percentage.style} x=${state.percentage.x} y=${state.percentage.y}>${state.percentage.value}</text>
    </svg>`}
  </div>`
}
