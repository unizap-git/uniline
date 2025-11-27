'use strict';

var React = require('react');

function ListOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M18 6H34V12H18V6Z"/><path d="M18 21H38V27H18V21Z"/><path d="M18 36H44V42H18V36Z"/><circle cx="8" cy="9" r="2"/><circle cx="8" cy="24" r="2"/><circle cx="8" cy="39" r="2"/>' : '<path d="M18 6H34V12H18V6Z"/><path d="M18 21H38V27H18V21Z"/><path d="M18 36H44V42H18V36Z"/><circle cx="8" cy="9" r="2"/><circle cx="8" cy="24" r="2"/><circle cx="8" cy="39" r="2"/>';

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

module.exports = ListOne;
