var xtend     = require('xtend');

module.exports = defaults;

function defaults(opt) {
  return xtend({
    size: 100,
    loading: 'loading',
    fgcolor: '#00FF00',
    bgcolor: '#222',
    textcolor: '#222',
    font: 'arial,monospace',
    overlaycolor: 'white',
    overlayopacity: 0.7,
    appendTo: document.body
  }, opt);
}
