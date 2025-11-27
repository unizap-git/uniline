'use strict';

var React = require('react');

function Master(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"/><rect x="10" y="32" width="28" height="12" rx="6"/><path d="M20 16L24 12L28 16L32 12L29 23H19L16 12L20 16Z"/><circle cx="32" cy="38" r="2"/>' : '<path d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"/><rect x="10" y="32" width="28" height="12" rx="6"/><path d="M20 16L24 12L28 16L32 12L29 23H19L16 12L20 16Z"/><circle cx="32" cy="38" r="2"/>';

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

module.exports = Master;
