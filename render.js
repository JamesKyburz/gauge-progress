var h = require('virtual-dom/h');
var svg = require('virtual-dom/virtual-hyperscript/svg');

module.exports = render;

function render(state) {
  return h('div', {className:'gauge-widget'}, [
           h('div', {className:'overlay', style:state.overlay.style}),
           svg('svg', {
             style:state.gauge.style,
             width:'100%',
             height:'100%'}, [
               svg('circle', {
               fill:'transparent',
               style:state.circle.style,
               cx:state.circle.cx,
               cy:state.circle.cy,
               r:state.circle.r} ),
               svg('path', {
                 'class':'progress',
                 fill:'transparent',
                 style:state.progress.style,
                 d:state.progress.d} ),
               svg('text', {
                 'class':'loading',
                 'text-anchor':'middle',
                 style:state.loading.style,
                 x:state.loading.x,
                 y:state.loading.y}
                 , [state.loading.value]),
                 svg('text', {
                   'class':'percentage',
                   'text-anchor':'middle',
                   style:state.percentage.style,
                   x:state.percentage.x,
                   y:state.percentage.y}
                   , [state.percentage.value])
             ])
  ]);
}
