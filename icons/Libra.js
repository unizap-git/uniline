'use strict';

var React = require('react');

function Libra(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4 39H44"/><path d="M4 27H15.5"/><path d="M32.5 27L44 27"/><path d="M15.5143 27C15.3799 26.8372 15.25 26.6705 15.125 26.5C15.0052 26.3367 14.8898 26.17 14.7789 26C13.6538 24.2744 13 22.2136 13 20C13 13.9249 17.9249 9 24 9C30.0751 9 35 13.9249 35 20C35 22.2136 34.3462 24.2744 33.2211 26C33.1102 26.17 32.9948 26.3367 32.875 26.5C32.75 26.6705 32.6201 26.8372 32.4857 27"/>' : '<path d="M4 39H44"/><path d="M4 27H15.5"/><path d="M32.5 27L44 27"/><path d="M15.5143 27C15.3799 26.8372 15.25 26.6705 15.125 26.5C15.0052 26.3367 14.8898 26.17 14.7789 26C13.6538 24.2744 13 22.2136 13 20C13 13.9249 17.9249 9 24 9C30.0751 9 35 13.9249 35 20C35 22.2136 34.3462 24.2744 33.2211 26C33.1102 26.17 32.9948 26.3367 32.875 26.5C32.75 26.6705 32.6201 26.8372 32.4857 27"/>';

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

module.exports = Libra;
