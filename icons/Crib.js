'use strict';

var React = require('react');

function Crib(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M38 6V44"/><path d="M10 40H38"/><path d="M10 34H38"/><path d="M6 12H42"/><path d="M35 6L41 6"/><path d="M7 6L13 6"/><path d="M10 6V44"/><path d="M17 12V28"/><path d="M24 12V28"/><path d="M31 12V28"/>' : '<path d="M38 6V44"/><path d="M10 40H38"/><path d="M10 34H38"/><path d="M6 12H42"/><path d="M35 6L41 6"/><path d="M7 6L13 6"/><path d="M10 6V44"/><path d="M17 12V28"/><path d="M24 12V28"/><path d="M31 12V28"/>';

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

module.exports = Crib;
