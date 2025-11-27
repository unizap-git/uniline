'use strict';

var React = require('react');

function ClothesShortSleeve(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44 4H4V12H10V44H38V12H44V4Z"/><path d="M10 32H38"/><path d="M10 24H38"/><path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"/>' : '<path d="M44 4H4V12H10V44H38V12H44V4Z"/><path d="M10 32H38"/><path d="M10 24H38"/><path d="M30 4C30 7.31371 27.3137 10 24 10C20.6863 10 18 7.31371 18 4"/>';

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

module.exports = ClothesShortSleeve;
