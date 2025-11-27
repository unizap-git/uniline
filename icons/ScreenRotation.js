'use strict';

var React = require('react');

function ScreenRotation(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24C4 35.0457 12.9543 44 24 44L19 39"/><path d="M44 24C44 12.9543 35.0457 4 24 4L29 9"/><path d="M30 41L7 18L18 7L41 30L30 41Z"/>' : '<path d="M4 24C4 35.0457 12.9543 44 24 44L19 39"/><path d="M44 24C44 12.9543 35.0457 4 24 4L29 9"/><path d="M30 41L7 18L18 7L41 30L30 41Z"/>';

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

module.exports = ScreenRotation;
