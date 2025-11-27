'use strict';

var React = require('react');

function ReduceDecimalPlaces(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M27 9C27 6.23858 24.7614 4 22 4C19.2386 4 17 6.23858 17 9V19C17 21.7614 19.2386 24 22 24C24.7614 24 27 21.7614 27 19V9Z"/><path d="M25 32L19 38L25 44"/><path d="M8 24H9"/><path d="M40 38H19"/>' : '<path d="M27 9C27 6.23858 24.7614 4 22 4C19.2386 4 17 6.23858 17 9V19C17 21.7614 19.2386 24 22 24C24.7614 24 27 21.7614 27 19V9Z"/><path d="M25 32L19 38L25 44"/><path d="M8 24H9"/><path d="M40 38H19"/>';

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

module.exports = ReduceDecimalPlaces;
