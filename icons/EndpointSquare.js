'use strict';

var React = require('react');

function EndpointSquare(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M42 40H21.4286C18.355 40 6 40 6 40V8C6 8 12.9076 8 21.4286 8H42"/><circle cx="24" cy="24" r="3"/><path d="M42 24L27 24"/>' : '<path d="M42 40H21.4286C18.355 40 6 40 6 40V8C6 8 12.9076 8 21.4286 8H42"/><circle cx="24" cy="24" r="3"/><path d="M42 24L27 24"/>';

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

module.exports = EndpointSquare;
