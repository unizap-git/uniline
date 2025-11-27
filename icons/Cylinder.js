'use strict';

var React = require('react');

function Cylinder(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 10C44 13.3137 35.0457 16 24 16C12.9543 16 4 13.3137 4 10C4 6.68629 12.9543 4 24 4C35.0457 4 44 6.68629 44 10Z"/><path d="M44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4 41.3137 4 38C4 34.6863 12.9543 32 24 32C35.0457 32 44 34.6863 44 38Z"/><path d="M44 10V38"/><path d="M4 10V38"/>' : '<path d="M44 10C44 13.3137 35.0457 16 24 16C12.9543 16 4 13.3137 4 10C4 6.68629 12.9543 4 24 4C35.0457 4 44 6.68629 44 10Z"/><path d="M44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4 41.3137 4 38C4 34.6863 12.9543 32 24 32C35.0457 32 44 34.6863 44 38Z"/><path d="M44 10V38"/><path d="M4 10V38"/>';

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

module.exports = Cylinder;
