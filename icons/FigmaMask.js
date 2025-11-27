'use strict';

var React = require('react');

function FigmaMask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="24" r="20"/><path d="M14 41.3244C19.978 37.8663 24 31.4028 24 24C24 16.5972 19.978 10.1338 14 6.67566C8.02199 10.1338 4 16.5972 4 24C4 31.4028 8.02199 37.8663 14 41.3244Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M14 41.3244C19.978 37.8663 24 31.4028 24 24C24 16.5972 19.978 10.1338 14 6.67566C8.02199 10.1338 4 16.5972 4 24C4 31.4028 8.02199 37.8663 14 41.3244Z"/>';

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

module.exports = FigmaMask;
