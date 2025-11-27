'use strict';

var React = require('react');

function HospitalBed(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 17V39"/><path d="M42 25L42 39"/><path d="M26 15H38"/><path d="M11 22H17"/><path d="M6 28L42 28"/><path d="M6 34L42 34"/><path d="M32 9V21"/>' : '<path d="M6 17V39"/><path d="M42 25L42 39"/><path d="M26 15H38"/><path d="M11 22H17"/><path d="M6 28L42 28"/><path d="M6 34L42 34"/><path d="M32 9V21"/>';

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

module.exports = HospitalBed;
