'use strict';

var React = require('react');

function Inspection(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M43 33V19H5V41C5 42.1046 5.89543 43 7 43H24"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"/><path d="M16 5V13"/><path d="M32 5V13"/><circle cx="30" cy="32" r="7"/><path d="M36 37L42 42"/>' : '<path d="M43 33V19H5V41C5 42.1046 5.89543 43 7 43H24"/><path d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"/><path d="M16 5V13"/><path d="M32 5V13"/><circle cx="30" cy="32" r="7"/><path d="M36 37L42 42"/>';

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

module.exports = Inspection;
