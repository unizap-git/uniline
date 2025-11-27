'use strict';

var React = require('react');

function Briefcase(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M32 16C32 9.92487 28.4183 4 24 4C19.5817 4 16 9.92487 16 16"/><path d="M9 16H39L40 28H27V25H21V28H8L9 16Z"/><path d="M8 28L6 42H42L40 28"/><path d="M21 25H27V31H21V25Z"/>' : '<path d="M32 16C32 9.92487 28.4183 4 24 4C19.5817 4 16 9.92487 16 16"/><path d="M9 16H39L40 28H27V25H21V28H8L9 16Z"/><path d="M8 28L6 42H42L40 28"/><path d="M21 25H27V31H21V25Z"/>';

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

module.exports = Briefcase;
