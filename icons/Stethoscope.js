'use strict';

var React = require('react');

function Stethoscope(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.9474 4V10M10.0526 7H4C4 7 4 16 4 21C4 26 8 32 16 32C24 32 28 26 28 21C28 16 28 7 28 7H21.9474H10.0526ZM10.0526 4V10V4Z"/><path d="M40 23C42.2091 23 44 21.2091 44 19C44 16.7909 42.2091 15 40 15C37.7909 15 36 16.7909 36 19C36 21.2091 37.7909 23 40 23Z"/><path d="M16 32C16 38.6274 21.3726 44 28 44C34.6274 44 40 38.6274 40 32V23"/>' : '<path d="M21.9474 4V10M10.0526 7H4C4 7 4 16 4 21C4 26 8 32 16 32C24 32 28 26 28 21C28 16 28 7 28 7H21.9474H10.0526ZM10.0526 4V10V4Z"/><path d="M40 23C42.2091 23 44 21.2091 44 19C44 16.7909 42.2091 15 40 15C37.7909 15 36 16.7909 36 19C36 21.2091 37.7909 23 40 23Z"/><path d="M16 32C16 38.6274 21.3726 44 28 44C34.6274 44 40 38.6274 40 32V23"/>';

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

module.exports = Stethoscope;
