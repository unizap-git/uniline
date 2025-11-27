'use strict';

var React = require('react');

function CakeFive(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 27H39L34.3125 44H13.6875L9 27Z"/><path d="M39 27H9C9 21.5 14.5 19 14.5 19C14.5 17 16.5 11 24 11C31.5 11 33.5 17 33.5 19C33.5 19 39 21.5 39 27Z"/><path d="M6 27H42"/><path d="M28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12"/><path d="M24 8L28 4"/><line x1="20" y1="27" x2="20" y2="44"/><line x1="28" y1="27" x2="28" y2="44"/>' : '<path d="M9 27H39L34.3125 44H13.6875L9 27Z"/><path d="M39 27H9C9 21.5 14.5 19 14.5 19C14.5 17 16.5 11 24 11C31.5 11 33.5 17 33.5 19C33.5 19 39 21.5 39 27Z"/><path d="M6 27H42"/><path d="M28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12"/><path d="M24 8L28 4"/><line x1="20" y1="27" x2="20" y2="44"/><line x1="28" y1="27" x2="28" y2="44"/>';

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

module.exports = CakeFive;
