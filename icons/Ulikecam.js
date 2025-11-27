'use strict';

var React = require('react');

function Ulikecam(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22 44C31.9411 44 40 35.9411 40 26C40 16.0589 31.9411 8 22 8C12.0589 8 4 16.0589 4 26C4 35.9411 12.0589 44 22 44Z"/><path d="M41 10C42.6569 10 44 8.65685 44 7C44 5.34315 42.6569 4 41 4C39.3431 4 38 5.34315 38 7C38 8.65685 39.3431 10 41 10Z"/>' : '<path d="M22 44C31.9411 44 40 35.9411 40 26C40 16.0589 31.9411 8 22 8C12.0589 8 4 16.0589 4 26C4 35.9411 12.0589 44 22 44Z"/><path d="M41 10C42.6569 10 44 8.65685 44 7C44 5.34315 42.6569 4 41 4C39.3431 4 38 5.34315 38 7C38 8.65685 39.3431 10 41 10Z"/>';

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

module.exports = Ulikecam;
