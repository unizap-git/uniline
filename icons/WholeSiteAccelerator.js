'use strict';

var React = require('react');

function WholeSiteAccelerator(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="22" cy="40" r="4"/><circle cx="26" cy="8" r="4"/><circle cx="36" cy="24" r="4"/><circle cx="12" cy="24" r="4"/><path d="M32 24L16 24"/><path d="M23 11L15 21"/><path d="M32.9998 27L24.9987 37"/>' : '<circle cx="22" cy="40" r="4"/><circle cx="26" cy="8" r="4"/><circle cx="36" cy="24" r="4"/><circle cx="12" cy="24" r="4"/><path d="M32 24L16 24"/><path d="M23 11L15 21"/><path d="M32.9998 27L24.9987 37"/>';

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

module.exports = WholeSiteAccelerator;
