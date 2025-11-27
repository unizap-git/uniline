'use strict';

var React = require('react');

function Parabola(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 25H6C12 25 16 9 24 9C32 9 36 25 42 25H44"/><path d="M4 33V39"/><path d="M24 33V39"/><path d="M44 33V39"/><path d="M4 36H44"/>' : '<path d="M4 25H6C12 25 16 9 24 9C32 9 36 25 42 25H44"/><path d="M4 33V39"/><path d="M24 33V39"/><path d="M44 33V39"/><path d="M4 36H44"/>';

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

module.exports = Parabola;
