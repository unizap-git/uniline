'use strict';

var React = require('react');

function FenceTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 4V44"/><path d="M16 9L16 37"/><path d="M24 9L24 37"/><path d="M32 9L32 37"/><path d="M42 44L6 44"/><path d="M42 37L6 37"/><path d="M39 4V44"/><path d="M42 9L6 9"/>' : '<path d="M9 4V44"/><path d="M16 9L16 37"/><path d="M24 9L24 37"/><path d="M32 9L32 37"/><path d="M42 44L6 44"/><path d="M42 37L6 37"/><path d="M39 4V44"/><path d="M42 9L6 9"/>';

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

module.exports = FenceTwo;
