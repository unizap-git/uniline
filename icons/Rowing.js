'use strict';

var React = require('react');

function Rowing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M30.0195 16C32.781 16 35.0195 13.7614 35.0195 11C35.0195 8.23858 32.781 6 30.0195 6C27.2581 6 25.0195 8.23858 25.0195 11C25.0195 13.7614 27.2581 16 30.0195 16Z" stroke-miterlimit="2"/><path d="M42 31L35 44" stroke-miterlimit="2"/><path d="M32.01 40L26 29L9 40L21 20L44 25" stroke-miterlimit="2"/><path d="M4 40H44" stroke-miterlimit="2"/>' : '<path d="M30.0195 16C32.781 16 35.0195 13.7614 35.0195 11C35.0195 8.23858 32.781 6 30.0195 6C27.2581 6 25.0195 8.23858 25.0195 11C25.0195 13.7614 27.2581 16 30.0195 16Z" stroke-miterlimit="2"/><path d="M42 31L35 44" stroke-miterlimit="2"/><path d="M32.01 40L26 29L9 40L21 20L44 25" stroke-miterlimit="2"/><path d="M4 40H44" stroke-miterlimit="2"/>';

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

module.exports = Rowing;
