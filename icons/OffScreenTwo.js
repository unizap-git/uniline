'use strict';

var React = require('react');

function OffScreenTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M41 19H29V7"/><path d="M18 6H6V18"/><path d="M30 42H42V30"/><path d="M7 29H19V41"/><path d="M42 6L29 19"/><path d="M19 29L6 42"/>' : '<path d="M41 19H29V7"/><path d="M18 6H6V18"/><path d="M30 42H42V30"/><path d="M7 29H19V41"/><path d="M42 6L29 19"/><path d="M19 29L6 42"/>';

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

module.exports = OffScreenTwo;
