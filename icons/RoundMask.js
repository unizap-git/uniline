'use strict';

var React = require('react');

function RoundMask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9542 35.0457 4 24 4C12.9543 4 4 12.9542 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M23.9999 44C32.9552 44 40.5358 38.1142 43.0843 30H4.91553C7.46405 38.1142 15.0446 44 23.9999 44Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9542 35.0457 4 24 4C12.9543 4 4 12.9542 4 24C4 35.0457 12.9543 44 24 44Z"/><path d="M23.9999 44C32.9552 44 40.5358 38.1142 43.0843 30H4.91553C7.46405 38.1142 15.0446 44 23.9999 44Z"/>';

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

module.exports = RoundMask;
