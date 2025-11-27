'use strict';

var React = require('react');

function SpeedOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8809 25.5334 29.47C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5019 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z"/><path d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492"/><path d="M24 4V8"/><path d="M38.8454 11.1421L35.7368 13.6593"/><path d="M42.5223 27.2328L38.6248 26.333"/><path d="M5.47737 27.2328L9.37485 26.333"/><path d="M9.15463 11.142L12.2632 13.6593"/>' : '<path d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8809 25.5334 29.47C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5019 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z"/><path d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492"/><path d="M24 4V8"/><path d="M38.8454 11.1421L35.7368 13.6593"/><path d="M42.5223 27.2328L38.6248 26.333"/><path d="M5.47737 27.2328L9.37485 26.333"/><path d="M9.15463 11.142L12.2632 13.6593"/>';

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

module.exports = SpeedOne;
