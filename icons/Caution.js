'use strict';

var React = require('react');

function Caution(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23.9,21L12.9,2c-.4-.6-1.4-.6-1.7,0L.1,21c-.2.3-.2.7,0,1,.2.3.5.5.9.5h22c.4,0,.7-.2.9-.5.2-.3.2-.7,0-1ZM13,18c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM12,15.5h0c-.6,0-1-.4-1-1v-5c0-.6.4-1,1-1h0c.6,0,1,.4,1,1v5c0,.6-.4,1-1,1Z"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 5L2 43H46L24 5Z"/><path d="M24 35V36"/><path d="M24 19.0005L24.0083 29"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
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

module.exports = Caution;
