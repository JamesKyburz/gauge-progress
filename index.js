var defaults  = require('./defaults');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var render = require('./render');
var mainloop = require('main-loop');

module.exports = Gauge;

function Gauge(opt) {
  if (!(this instanceof Gauge)) return new Gauge(opt);
  opt = defaults(opt);
  this.r = opt.size/1.3;
  this.size = opt.size;
  var fontsize = opt.size/4;
  var strokewidth = fontsize/2;
  this.state = {
    overlay: {
      style: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 1111111111,
        backgroundColor: opt.overlaycolor,
        opacity: opt.overlayopacity,
        left: 0,
        top: 0
      }
    },
    gauge: {
      style: {
        position: 'fixed',
        left: 'calc(50% - ' + opt.size + 'px)',
        top: 'calc(50% - ' + opt.size + 'px)',
        zIndex: 2222222222
      }
    },
    circle: {
      cx: opt.size,
      cy: opt.size,
      r: this.r,
      style: {
        strokeWidth: strokewidth,
        stroke: opt.bgcolor
      }
    },
    progress: {
      style: {
        strokeWidth: strokewidth * 0.7,
        stroke: opt.fgcolor
      }
    },
    loading: {
      x: opt.size,
      y: opt.size - fontsize * 1.3,
      value: opt.loading,
      style: {
        fill: opt.textcolor,
        fontFamily: opt.font,
        fontSize: fontsize * 0.7 + 'px'
      }
    },
    percentage: {
      x: opt.size,
      y: opt.size,
      style: {
        fill: opt.textcolor,
        fontFamily: opt.font,
        fontSize: fontsize + 'px'
      }
    }
  };
  this.loop = mainloop(this.state, render, {
    create: createElement,
    diff: diff,
    patch: patch
  });
  this.appendTo = opt.appendTo || document.body;
}

Gauge.prototype.start = function start() {
  this.appendTo.appendChild(this.loop.target);
};

Gauge.prototype.stop = function stop() {
  var el = this.loop.target.parentNode;
  if (el) el.removeChild(this.loop.target);
};

Gauge.prototype.progress = function progress(value, total) {
  if (!this.loop.target.parentNode) return;
  this.state.progress.d = this._progress(value, total);
  this.state.percentage.value = Math.floor(value/total*100) + '%';
  this.loop.update(this.state);
};

Gauge.prototype._progress = function progress(value, total) {
  var alpha = 360 / total * value;
  var a = (90 - alpha) * Math.PI / 180;
  var rx = this.size + this.r * Math.cos(a);
  var ry = this.size - this.r * Math.sin(a);
  var center = alpha > 180 ? 1: 0;
  return 'M' + this.size + ',' + (this.size - this.r) + ' A' + this.r + ',' + this.r + ',' + 0 + ',' + center + ',' + 1 + ',' + rx + ',' + ry;
};
