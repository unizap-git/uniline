'use strict';

var React = require('react');

function Gemini(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 6C4 6 15.5878 14 24 14C32.4122 14 44 6 44 6"/><path d="M4 42C4 42 15.5878 34 24 34C32.4122 34 44 42 44 42"/><path d="M15 12V36"/><path d="M33 12V36"/>' : '<path d="M4 6C4 6 15.5878 14 24 14C32.4122 14 44 6 44 6"/><path d="M4 42C4 42 15.5878 34 24 34C32.4122 34 44 42 44 42"/><path d="M15 12V36"/><path d="M33 12V36"/>';

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

module.exports = Gemini;
