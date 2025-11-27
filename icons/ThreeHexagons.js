'use strict';

var React = require('react');

function ThreeHexagons(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 27L14 21L4 27V39L14 45L24 39V27Z"/><path d="M44 27L34 21L24 27V39L34 45L44 39V27Z"/><path d="M34 9L24 3L14 9V21L24 27L34 21V9Z"/>' : '<path d="M24 27L14 21L4 27V39L14 45L24 39V27Z"/><path d="M44 27L34 21L24 27V39L34 45L44 39V27Z"/><path d="M34 9L24 3L14 9V21L24 27L34 21V9Z"/>';

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

module.exports = ThreeHexagons;
