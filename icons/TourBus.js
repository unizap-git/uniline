'use strict';

var React = require('react');

function TourBus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 23H39V34C39 35.1046 38.1046 36 37 36H11C9.89543 36 9 35.1046 9 34V23Z"/><path d="M9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V23H9V8Z"/><path d="M15 42C13.3431 42 12 40.6569 12 39V36H18V39C18 40.6569 16.6569 42 15 42Z"/><path d="M33 42C31.3431 42 30 40.6569 30 39V36H36V39C36 40.6569 34.6569 42 33 42Z"/><path d="M6 12V16"/><path d="M42 12V16"/><circle cx="15" cy="30" r="2"/><circle cx="33" cy="30" r="2"/><path d="M31 6L22 16"/><path d="M38 7L33 13"/>' : '<path d="M9 23H39V34C39 35.1046 38.1046 36 37 36H11C9.89543 36 9 35.1046 9 34V23Z"/><path d="M9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V23H9V8Z"/><path d="M15 42C13.3431 42 12 40.6569 12 39V36H18V39C18 40.6569 16.6569 42 15 42Z"/><path d="M33 42C31.3431 42 30 40.6569 30 39V36H36V39C36 40.6569 34.6569 42 33 42Z"/><path d="M6 12V16"/><path d="M42 12V16"/><circle cx="15" cy="30" r="2"/><circle cx="33" cy="30" r="2"/><path d="M31 6L22 16"/><path d="M38 7L33 13"/>';

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

module.exports = TourBus;
