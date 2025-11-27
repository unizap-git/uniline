'use strict';

var React = require('react');

function Data(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M44.0001 11C44.0001 11 44 36.0623 44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4.00003 41.3137 4.00003 38C4.00003 36.1423 4 11 4 11"/><path d="M44 29C44 32.3137 35.0457 35 24 35C12.9543 35 4 32.3137 4 29"/><path d="M44 20C44 23.3137 35.0457 26 24 26C12.9543 26 4 23.3137 4 20"/><ellipse cx="24" cy="10" rx="20" ry="6"/>' : '<path d="M44.0001 11C44.0001 11 44 36.0623 44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4.00003 41.3137 4.00003 38C4.00003 36.1423 4 11 4 11"/><path d="M44 29C44 32.3137 35.0457 35 24 35C12.9543 35 4 32.3137 4 29"/><path d="M44 20C44 23.3137 35.0457 26 24 26C12.9543 26 4 23.3137 4 20"/><ellipse cx="24" cy="10" rx="20" ry="6"/>';

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

module.exports = Data;
