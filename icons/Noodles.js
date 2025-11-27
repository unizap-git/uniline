'use strict';

var React = require('react');

function Noodles(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 35.0457 10.6667 44 24 44C37.3333 44 44 35.0457 44 24H4Z"/><path d="M16 24V8"/><path d="M24 24V6"/><path d="M32 24V4"/><path d="M8 24V10"/><path d="M4 13L44 4"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M4 24C4 35.0457 10.6667 44 24 44C37.3333 44 44 35.0457 44 24H4Z"/><path d="M16 24V8"/><path d="M24 24V6"/><path d="M32 24V4"/><path d="M8 24V10"/><path d="M4 13L44 4"/>';

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

module.exports = Noodles;
