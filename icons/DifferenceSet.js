'use strict';

var React = require('react');

function DifferenceSet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6 40V19C6 17.8954 6.89543 17 8 17H15C16.1046 17 17 17.8954 17 19V29C17 30.1046 17.8954 31 19 31H29C30.1046 31 31 31.8954 31 33V40C31 41.1046 30.1046 42 29 42H8C6.89543 42 6 41.1046 6 40Z"/><path d="M42 8V29C42 30.1046 41.1046 31 40 31H33C31.8954 31 31 30.1046 31 29V19C31 17.8954 30.1046 17 29 17H19C17.8954 17 17 16.1046 17 15V8C17 6.89543 17.8954 6 19 6H40C41.1046 6 42 6.89543 42 8Z"/>' : '<path d="M6 40V19C6 17.8954 6.89543 17 8 17H15C16.1046 17 17 17.8954 17 19V29C17 30.1046 17.8954 31 19 31H29C30.1046 31 31 31.8954 31 33V40C31 41.1046 30.1046 42 29 42H8C6.89543 42 6 41.1046 6 40Z"/><path d="M42 8V29C42 30.1046 41.1046 31 40 31H33C31.8954 31 31 30.1046 31 29V19C31 17.8954 30.1046 17 29 17H19C17.8954 17 17 16.1046 17 15V8C17 6.89543 17.8954 6 19 6H40C41.1046 6 42 6.89543 42 8Z"/>';

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

module.exports = DifferenceSet;
