'use strict';

var React = require('react');

function Layers(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z"/><path d="M4 20L24 27L44 20"/><path d="M4 28L24 35L44 28"/><path d="M4 36L24 43L44 36"/>' : '<path d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z"/><path d="M4 20L24 27L44 20"/><path d="M4 28L24 35L44 28"/><path d="M4 36L24 43L44 36"/>';

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

module.exports = Layers;
