'use strict';

var React = require('react');

function BarberClippers(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 8L38 8V17L33 24V36C33 36 33 44 24 44C15 44 15 36 15 36L15 24L10 17V8Z"/><path d="M15 4V10"/><path d="M21 4V10"/><path d="M27 4V10"/><rect x="21" y="28" width="6" height="10" rx="3"/><path d="M10 17H38"/><path d="M33 4V10"/>' : '<path d="M10 8L38 8V17L33 24V36C33 36 33 44 24 44C15 44 15 36 15 36L15 24L10 17V8Z"/><path d="M15 4V10"/><path d="M21 4V10"/><path d="M27 4V10"/><rect x="21" y="28" width="6" height="10" rx="3"/><path d="M10 17H38"/><path d="M33 4V10"/>';

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

module.exports = BarberClippers;
