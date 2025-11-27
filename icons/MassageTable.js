'use strict';

var React = require('react');

function MassageTable(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M14 17C14 15.8954 14.8954 15 16 15H42C43.1046 15 44 15.8954 44 17V23H14V17Z"/><path d="M26 23L14 37"/><path d="M32 23L44 37"/><path d="M14 23L6 23"/><path d="M39 31L19 31"/><path d="M6 13V23"/><path d="M14 23V40"/><path d="M44 23V40"/><path d="M9 14L3 12"/>' : '<path d="M14 17C14 15.8954 14.8954 15 16 15H42C43.1046 15 44 15.8954 44 17V23H14V17Z"/><path d="M26 23L14 37"/><path d="M32 23L44 37"/><path d="M14 23L6 23"/><path d="M39 31L19 31"/><path d="M6 13V23"/><path d="M14 23V40"/><path d="M44 23V40"/><path d="M9 14L3 12"/>';

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

module.exports = MassageTable;
