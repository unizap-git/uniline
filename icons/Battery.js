'use strict';

var React = require('react');

function Battery(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M7 13v-2h7v2H7Z"/>   <path fill-rule="evenodd" d="M2 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8Zm4 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H6Z" clip-rule="evenodd"/>   <path d="M22 14v-4a1 1 0 0 0-1-1h-1v6h1a1 1 0 0 0 1-1Z"/>' : '<path d="M2.98755 7.97095c0-.55229.44771-1 1-1H16.9253c.5523 0 1 .44771 1 1v7.95855c0 .5522-.4477 1-1 1H3.98755c-.55229 0-1-.4478-1-1V7.97095ZM20.9129 12.9419v-1.9834c0-.5523-.4478-1-1-1h-.9876c-.5523 0-1 .4477-1 1v1.9834c0 .5523.4477 1 1 1h.9876c.5522 0 1-.4477 1-1Z"/>   <path d="M5.9751 9.9585h8.9627v3.9834H5.9751V9.9585Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = Battery;
