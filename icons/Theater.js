'use strict';

var React = require('react');

function Theater(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H40C41.1046 6 42 6.89543 42 8V36L32 22.0053C29.3333 23.5901 26.6667 24.3825 24 24.3825C21.3333 24.3825 18.6667 23.5901 16 22.0053L6 36V8C6 6.89543 6.89543 6 8 6Z"/><path d="M6 42H42"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 6H40C41.1046 6 42 6.89543 42 8V36L32 22.0053C29.3333 23.5901 26.6667 24.3825 24 24.3825C21.3333 24.3825 18.6667 23.5901 16 22.0053L6 36V8C6 6.89543 6.89543 6 8 6Z"/><path d="M6 42H42"/>';

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

module.exports = Theater;
