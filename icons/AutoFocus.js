'use strict';

var React = require('react');

function AutoFocus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="24" r="9"/><circle r="3" transform="matrix(-1 0 0 1 24 24)"/><path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M42 8V24"/><path d="M6 24L6 40"/>' : '<circle cx="24" cy="24" r="9"/><circle r="3" transform="matrix(-1 0 0 1 24 24)"/><path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M42 8V24"/><path d="M6 24L6 40"/>';

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

module.exports = AutoFocus;
