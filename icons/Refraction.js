'use strict';

var React = require('react');

function Refraction(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"/><path d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"/><path d="M4 22L19.5 17"/><path d="M28 16L44 13"/><path d="M30 19.5L44 21"/><path d="M32.7002 24L44.0002 29"/>' : '<path d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"/><path d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"/><path d="M4 22L19.5 17"/><path d="M28 16L44 13"/><path d="M30 19.5L44 21"/><path d="M32.7002 24L44.0002 29"/>';

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

module.exports = Refraction;
