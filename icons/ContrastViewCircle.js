'use strict';

var React = require('react');

function ContrastViewCircle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V4Z"/><path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44V4Z"/><path d="M24 36H9"/><path d="M24 28H5"/><path d="M24 20H5"/><path d="M24 12H9"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V4Z"/><path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44V4Z"/><path d="M24 36H9"/><path d="M24 28H5"/><path d="M24 20H5"/><path d="M24 12H9"/>';

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

module.exports = ContrastViewCircle;
