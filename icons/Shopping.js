'use strict';

var React = require('react');

function Shopping(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M39 32H13L8 12H44L39 32Z"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"/><circle cx="13" cy="39" r="3"/><circle cx="39" cy="39" r="3"/>' : '<path d="M39 32H13L8 12H44L39 32Z"/><path d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"/><circle cx="13" cy="39" r="3"/><circle cx="39" cy="39" r="3"/>';

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

module.exports = Shopping;
