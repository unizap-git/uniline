'use strict';

var React = require('react');

function InvertCamera(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M42 8V24"/><path d="M6 24L6 40"/><rect x="14" y="20" width="12" height="8"/><path d="M34 28L32 26.6667V21.3333L34 20V28Z"/>' : '<path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"/><path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"/><path d="M42 8V24"/><path d="M6 24L6 40"/><rect x="14" y="20" width="12" height="8"/><path d="M34 28L32 26.6667V21.3333L34 20V28Z"/>';

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

module.exports = InvertCamera;
