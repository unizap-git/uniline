'use strict';

var React = require('react');

function TwoDimensionalCodeOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 6H6V18H18V6Z"/><path d="M18 30H6V42H18V30Z"/><path d="M42 30H30V42H42V30Z"/><path d="M42 6H30V18H42V6Z"/><path d="M24 6V24"/><path d="M24 30V42"/><path d="M24 24L6 24"/><path d="M42 24H30"/>' : '<path d="M18 6H6V18H18V6Z"/><path d="M18 30H6V42H18V30Z"/><path d="M42 30H30V42H42V30Z"/><path d="M42 6H30V18H42V6Z"/><path d="M24 6V24"/><path d="M24 30V42"/><path d="M24 24L6 24"/><path d="M42 24H30"/>';

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

module.exports = TwoDimensionalCodeOne;
