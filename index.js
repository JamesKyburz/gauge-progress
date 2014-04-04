var fs        = require('fs');
var hyperglue = require('hyperglue');
var defaults  = require('./defaults');

module.exports = Gauge;

function Gauge(opt) {
  if (!(this instanceof Gauge)) return new Gauge(opt);
  this.opt = defaults(opt);
  this.r = this.opt.size/1.3;
  this.size = this.opt.size;
  this.fontsize = this.opt.size/4;
  this.strokewidth = this.fontsize/2;
}

Gauge.prototype.start = function start() {
  var html = fs.readFileSync(__dirname + '/index.html').toString();
  var opt = this.opt;
  this.el = opt.appendTo.appendChild(hyperglue(html, {
    '.overlay': {
      style: 'position: fixed; width: 100%; height: 100%;' +
             'z-index: 1111111111;'+
             'background-color:' + opt.overlaycolor + ';' +
             'opacity: ' + opt.overlayopacity + '; left:0; top: 0;'
    },
    svg: {
      style: 'position: fixed; '+
             'left: calc(50% - ' + this.size + 'px);'+
             'top: calc(50% - ' + this.size + 'px);'+
             'z-index: 2222222222;'
    },
    circle: {
      cx: this.size,
      cy: this.size,
      r: this.r,
      style: 'stroke-width:' + this.strokewidth + ';'+
             'stroke:' + opt.bgcolor + ';'
    },
    '.progress': {
      style: 'stroke-width:' + this.strokewidth * 0.7 + ';'+
             'stroke:' + opt.fgcolor + ';'
    },
    '.loading': {
      x: this.size,
      y: this.size - this.fontsize * 1.3,
      _text: opt.loading,
      style: 'fill: ' + opt.textcolor + ';' +
             'font-family:' + opt.font + ';' +
             'font-size:' + this.fontsize * 0.7 + ';'
    },
    '.percentage': {
      x: this.size,
      y: this.size,
      style: 'fill: ' + opt.textcolor + ';' +
             'font-family:' + opt.font + ';' +
             'font-size:' + this.fontsize + ';'
    }
  }));
};

Gauge.prototype.stop = function stop() {
  this.el.parentNode.removeChild(this.el);
};

Gauge.prototype.progress = function progress(value, total) {
  var opt = this.opt;
  this.el.querySelector('.progress').setAttribute('d', this._updateState(value, total));
  this.el.querySelector('.percentage').textContent = Math.floor(value/total*100) + '%';
};

Gauge.prototype._updateState = function updateState(value, total) {
  var alpha = 360 / total * value;
  var a = (90 - alpha) * Math.PI / 180;
  var rx = this.size + this.r * Math.cos(a);
  var ry = this.size - this.r * Math.sin(a);
  var center = alpha > 180 ? 1: 0;
  return 'M' + this.size + ',' + (this.size - this.r) + ' A' + this.r + ',' + this.r + ',' + 0 + ',' + center + ',' + 1 + ',' + rx + ',' + ry;
};
