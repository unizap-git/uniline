'use strict';

var React = require('react');

function SleepTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 12L4 36"/><path d="M44 29L44 36"/><path d="M44 29L4 29"/><path d="M22 16L22 29L44 29L44 19C44 17.3431 42.6569 16 41 16L22 16Z"/><circle cx="13" cy="20" r="3"/>' : '<path d="M4 12L4 36"/><path d="M44 29L44 36"/><path d="M44 29L4 29"/><path d="M22 16L22 29L44 29L44 19C44 17.3431 42.6569 16 41 16L22 16Z"/><circle cx="13" cy="20" r="3"/>';

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

module.exports = SleepTwo;
