'use strict';

var React = require('react');

function SingleBed(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"/><path d="M6 35V39"/><path d="M42 35V39"/><path d="M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z"/><path d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"/>' : '<path d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"/><path d="M6 35V39"/><path d="M42 35V39"/><path d="M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z"/><path d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"/>';

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

module.exports = SingleBed;
