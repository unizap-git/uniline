'use strict';

var React = require('react');

function Helmet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42.34 32C43.41 29.55 44 26.84 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24H24L24.01 32C24.01 35.87 27.14 39 31.01 39C34.88 39 38.01 35.87 38.01 32H42.34Z" stroke-miterlimit="2"/><path d="M31 34C32.1 34 33 33.1 33 32C33 30.9 32.1 30 31 30C29.9 30 29 30.9 29 32C29 33.1 29.9 34 31 34Z"/><path d="M24 32L6 36C8.23 39.17 10.45 42.37 14 44L26 37" stroke-miterlimit="2"/>' : '<path d="M42.34 32C43.41 29.55 44 26.84 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24H24L24.01 32C24.01 35.87 27.14 39 31.01 39C34.88 39 38.01 35.87 38.01 32H42.34Z" stroke-miterlimit="2"/><path d="M31 34C32.1 34 33 33.1 33 32C33 30.9 32.1 30 31 30C29.9 30 29 30.9 29 32C29 33.1 29.9 34 31 34Z"/><path d="M24 32L6 36C8.23 39.17 10.45 42.37 14 44L26 37" stroke-miterlimit="2"/>';

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

module.exports = Helmet;
