'use strict';

var React = require('react');

function ListBottom(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8 42C10.2091 42 12 40.2091 12 38C12 35.7909 10.2091 34 8 34C5.79086 34 4 35.7909 4 38C4 40.2091 5.79086 42 8 42Z"/><path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"/><path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"/><path d="M20 24H44"/><path d="M20 38H44"/><path d="M20 10H44"/>' : '<path d="M8 42C10.2091 42 12 40.2091 12 38C12 35.7909 10.2091 34 8 34C5.79086 34 4 35.7909 4 38C4 40.2091 5.79086 42 8 42Z"/><path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"/><path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"/><path d="M20 24H44"/><path d="M20 38H44"/><path d="M20 10H44"/>';

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

module.exports = ListBottom;
