'use strict';

var React = require('react');

function LeavesTwo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M20.9999 17C29.3846 14.8792 38.6651 8.24004 41.9999 5C41.9999 20 38.1985 28.4716 35.9999 31C25.9999 42.5 15.0652 37.1591 12.9999 33C8.14514 23.2233 15.0699 18.4999 20.9999 17Z"/><path d="M6 43C6.41176 41 8.38824 36.4 13 34"/>' : '<path d="M20.9999 17C29.3846 14.8792 38.6651 8.24004 41.9999 5C41.9999 20 38.1985 28.4716 35.9999 31C25.9999 42.5 15.0652 37.1591 12.9999 33C8.14514 23.2233 15.0699 18.4999 20.9999 17Z"/><path d="M6 43C6.41176 41 8.38824 36.4 13 34"/>';

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

module.exports = LeavesTwo;
