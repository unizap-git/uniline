'use strict';

var React = require('react');

function ArithmeticOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M28 31.5H42"/><path d="M28 39.5H42"/><path d="M7.34281 40.6568L18.6565 29.3431"/><path d="M7.3428 29.3433L18.6565 40.657"/><path d="M28 12.5H42"/><path d="M6 12.5H20"/><path d="M13 5.5V19.5"/>' : '<path d="M28 31.5H42"/><path d="M28 39.5H42"/><path d="M7.34281 40.6568L18.6565 29.3431"/><path d="M7.3428 29.3433L18.6565 40.657"/><path d="M28 12.5H42"/><path d="M6 12.5H20"/><path d="M13 5.5V19.5"/>';

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

module.exports = ArithmeticOne;
