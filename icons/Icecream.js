'use strict';

var React = require('react');

function Icecream(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33 18H15L21 40C21 40 22 43 24 43C26 43 27 40 27 40L33 18Z"/><path d="M36 18H12C12 10 17 4 24 4C31 4 36 10 36 18Z"/>' : '<path d="M33 18H15L21 40C21 40 22 43 24 43C26 43 27 40 27 40L33 18Z"/><path d="M36 18H12C12 10 17 4 24 4C31 4 36 10 36 18Z"/>';

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

module.exports = Icecream;
