'use strict';

var React = require('react');

function FilePdfOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M21 25V33"/><path d="M10 25V33"/><path d="M32 33V25H37"/><path d="M32 30H37"/><path d="M10 25H13.5C14.8807 25 16 26.1193 16 27.5V27.5C16 28.8807 14.8807 30 13.5 30H10"/><path d="M21 25H23C25.2091 25 27 26.7909 27 29V29C27 31.2091 25.2091 33 23 33H21"/><path d="M16 12H20"/>' : '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M21 25V33"/><path d="M10 25V33"/><path d="M32 33V25H37"/><path d="M32 30H37"/><path d="M10 25H13.5C14.8807 25 16 26.1193 16 27.5V27.5C16 28.8807 14.8807 30 13.5 30H10"/><path d="M21 25H23C25.2091 25 27 26.7909 27 29V29C27 31.2091 25.2091 33 23 33H21"/><path d="M16 12H20"/>';

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

module.exports = FilePdfOne;
