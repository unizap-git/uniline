'use strict';

var React = require('react');

function DiapersOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 6H6V24C6 28.5 8.5 42.5 24 42.5C39.5 42.5 42 28 42 24V6Z"/><path d="M6 14H16"/><path d="M32 14H42"/><path d="M42 24C32 24 25 28.8 25 42"/><path d="M6 24C16 24 23 28.8 23 42"/>' : '<path d="M42 6H6V24C6 28.5 8.5 42.5 24 42.5C39.5 42.5 42 28 42 24V6Z"/><path d="M6 14H16"/><path d="M32 14H42"/><path d="M42 24C32 24 25 28.8 25 42"/><path d="M6 24C16 24 23 28.8 23 42"/>';

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

module.exports = DiapersOne;
