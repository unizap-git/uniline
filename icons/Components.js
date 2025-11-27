'use strict';

var React = require('react');

function Components(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17 11L24 4L31 11L24 18L17 11Z"/><path d="M30 25L37 18L44 25L37 32L30 25Z"/><path d="M17 37L24 30L31 37L24 44L17 37Z"/><path d="M4 24L11 17L18 24L11 31L4 24Z"/>' : '<path d="M17 11L24 4L31 11L24 18L17 11Z"/><path d="M30 25L37 18L44 25L37 32L30 25Z"/><path d="M17 37L24 30L31 37L24 44L17 37Z"/><path d="M4 24L11 17L18 24L11 31L4 24Z"/>';

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

module.exports = Components;
