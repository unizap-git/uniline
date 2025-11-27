'use strict';

var React = require('react');

function Pisces(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 24L44 24"/><path d="M10 7C10 7 16 16.8203 16 24C16 31.1797 10 41 10 41"/><path d="M38 7C38 7 32 16.9597 32 24C32 31.0403 38 41 38 41"/>' : '<path d="M4 24L44 24"/><path d="M10 7C10 7 16 16.8203 16 24C16 31.1797 10 41 10 41"/><path d="M38 7C38 7 32 16.9597 32 24C32 31.0403 38 41 38 41"/>';

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

module.exports = Pisces;
