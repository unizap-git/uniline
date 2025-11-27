'use strict';

var React = require('react');

function FreezingLineColumn(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"/><path d="M16.1231 6L6 15"/><path d="M26.0027 6L6 24"/><path d="M35 6L6 33"/><path d="M19 30L6 42"/><path d="M41 10L29.2432 20.8525"/><path d="M19 21V42"/><path d="M19 21H42"/>' : '<path d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"/><path d="M16.1231 6L6 15"/><path d="M26.0027 6L6 24"/><path d="M35 6L6 33"/><path d="M19 30L6 42"/><path d="M41 10L29.2432 20.8525"/><path d="M19 21V42"/><path d="M19 21H42"/>';

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

module.exports = FreezingLineColumn;
