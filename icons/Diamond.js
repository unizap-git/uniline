'use strict';

var React = require('react');

function Diamond(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6364 5H37.3636L45 18.3L24 43L3 18.3L10.6364 5Z"/><path d="M10.6362 5L23.9999 43L37.3635 5"/><path d="M3 18.3H45"/><path d="M15.4092 18.3L24.0001 5L32.591 18.3"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6364 5H37.3636L45 18.3L24 43L3 18.3L10.6364 5Z"/><path d="M10.6362 5L23.9999 43L37.3635 5"/><path d="M3 18.3H45"/><path d="M15.4092 18.3L24.0001 5L32.591 18.3"/>';

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

module.exports = Diamond;
