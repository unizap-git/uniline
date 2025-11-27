'use strict';

var React = require('react');

function Lotus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19 16C19.1961 13.8571 20.2353 8.85714 24 6C25.3725 7.66667 28.5294 12 29 16"/><path d="M23.7523 42C15.2826 40.5455 -0.301481 31.3091 5.11908 6C12.2712 7.63636 26.0108 17.1273 23.7523 42Z"/><path d="M24.2477 42C32.7174 40.5455 48.3015 31.3091 42.8809 6C35.7288 7.63636 21.9892 17.1273 24.2477 42Z"/>' : '<path d="M19 16C19.1961 13.8571 20.2353 8.85714 24 6C25.3725 7.66667 28.5294 12 29 16"/><path d="M23.7523 42C15.2826 40.5455 -0.301481 31.3091 5.11908 6C12.2712 7.63636 26.0108 17.1273 23.7523 42Z"/><path d="M24.2477 42C32.7174 40.5455 48.3015 31.3091 42.8809 6C35.7288 7.63636 21.9892 17.1273 24.2477 42Z"/>';

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

module.exports = Lotus;
