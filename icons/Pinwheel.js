'use strict';

var React = require('react');

function Pinwheel(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21 4V21H11L21 4Z"/><path d="M27 44V27H37L27 44Z"/><path d="M27 11L44 21H27V11Z"/><path d="M21 37L4 27H21V37Z"/>' : '<path d="M21 4V21H11L21 4Z"/><path d="M27 44V27H37L27 44Z"/><path d="M27 11L44 21H27V11Z"/><path d="M21 37L4 27H21V37Z"/>';

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

module.exports = Pinwheel;
