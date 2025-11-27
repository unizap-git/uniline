'use strict';

var React = require('react');

function ClothesPants(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M33 44H42L38 4H10L6 44H15L24 19L33 44Z"/><path d="M24 4V9.5"/><path d="M17.0004 4C17.0004 4 17.0004 10 15.0004 12C13.0004 14 8.90039 15 8.90039 15"/><path d="M31 4C31 4 31 10 33 12C35 14 39.1 15 39.1 15"/>' : '<path d="M33 44H42L38 4H10L6 44H15L24 19L33 44Z"/><path d="M24 4V9.5"/><path d="M17.0004 4C17.0004 4 17.0004 10 15.0004 12C13.0004 14 8.90039 15 8.90039 15"/><path d="M31 4C31 4 31 10 33 12C35 14 39.1 15 39.1 15"/>';

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

module.exports = ClothesPants;
