'use strict';

var React = require('react');

function Puzzle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24V12H13V10C13 6.68629 15.6863 4 19 4C22.3137 4 25 6.68629 25 10V12H34V24H38C41.3137 24 44 26.6863 44 30C44 33.3137 41.3137 36 38 36H34V44H4V36H8C11.3137 36 14 33.3137 14 30C14 26.6863 11.3137 24 8 24H4Z"/>' : '<path d="M4 24V12H13V10C13 6.68629 15.6863 4 19 4C22.3137 4 25 6.68629 25 10V12H34V24H38C41.3137 24 44 26.6863 44 30C44 33.3137 41.3137 36 38 36H34V44H4V36H8C11.3137 36 14 33.3137 14 30C14 26.6863 11.3137 24 8 24H4Z"/>';

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

module.exports = Puzzle;
