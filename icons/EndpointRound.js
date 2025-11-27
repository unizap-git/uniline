'use strict';

var React = require('react');

function EndpointRound(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 24L26 24"/><circle cx="22" cy="24" r="3"/><path d="M42 40H22C13.1634 40 6 32.8366 6 24C6 15.1634 13.1634 8 22 8H42"/>' : '<path d="M42 24L26 24"/><circle cx="22" cy="24" r="3"/><path d="M42 40H22C13.1634 40 6 32.8366 6 24C6 15.1634 13.1634 8 22 8H42"/>';

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

module.exports = EndpointRound;
