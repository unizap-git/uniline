'use strict';

var React = require('react');

function FileZip(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><path d="M16 12H20"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M11 25H17L11 33H17"/><path d="M24 25V33"/><path d="M31 25V33"/><path d="M31 25H34.5C35.8807 25 37 26.1193 37 27.5V27.5C37 28.8807 35.8807 30 34.5 30H31"/>' : '<path d="M10 38V44H38V38"/><path d="M38 20V14L30 4H10V20"/><path d="M28 4V14H38"/><path d="M16 12H20"/><rect x="4" y="20" width="40" height="18" rx="2"/><path d="M11 25H17L11 33H17"/><path d="M24 25V33"/><path d="M31 25V33"/><path d="M31 25H34.5C35.8807 25 37 26.1193 37 27.5V27.5C37 28.8807 35.8807 30 34.5 30H31"/>';

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

module.exports = FileZip;
