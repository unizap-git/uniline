'use strict';

var React = require('react');

function ThreeSlashes(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 10L42 4V11L6 17V10Z"/><path d="M6 24L42 18V25L6 31V24Z"/><path d="M6 38L42 32V39L6 45V38Z"/>' : '<path d="M6 10L42 4V11L6 17V10Z"/><path d="M6 24L42 18V25L6 31V24Z"/><path d="M6 38L42 32V39L6 45V38Z"/>';

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

module.exports = ThreeSlashes;
