'use strict';

var React = require('react');

function TrendTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 44H44"/><path d="M4 26L12 28V38H4V26Z"/><path d="M20 24L28 20V38H20V24Z"/><path d="M36 16L44 12V38H36V16Z"/><path d="M4 18L12 20L44 4H34"/>' : '<path d="M4 44H44"/><path d="M4 26L12 28V38H4V26Z"/><path d="M20 24L28 20V38H20V24Z"/><path d="M36 16L44 12V38H36V16Z"/><path d="M4 18L12 20L44 4H34"/>';

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

module.exports = TrendTwo;
