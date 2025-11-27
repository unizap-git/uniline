'use strict';

var React = require('react');

function EngineeringVehicle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M32 6H38"/><path d="M10 36H6V28H32V36H18"/><path d="M32 36V12H38.5L44 24V36H41"/><path d="M4 8L26 8L26 22L7 22L4 8Z"/><circle cx="37" cy="38" r="4"/><circle cx="14" cy="38" r="4"/>' : '<path d="M32 6H38"/><path d="M10 36H6V28H32V36H18"/><path d="M32 36V12H38.5L44 24V36H41"/><path d="M4 8L26 8L26 22L7 22L4 8Z"/><circle cx="37" cy="38" r="4"/><circle cx="14" cy="38" r="4"/>';

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

module.exports = EngineeringVehicle;
