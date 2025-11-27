'use strict';

var React = require('react');

function BlockTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 6H30V18H18V6Z"/><path d="M30 6H42V18H30V6Z"/><path d="M6 6H18V18H6V6Z"/><path d="M6 18H18V30H6V18Z"/><path d="M6 30H18V42H6V30Z"/>' : '<path d="M18 6H30V18H18V6Z"/><path d="M30 6H42V18H30V6Z"/><path d="M6 6H18V18H6V6Z"/><path d="M6 18H18V30H6V18Z"/><path d="M6 30H18V42H6V30Z"/>';

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

module.exports = BlockTwo;
